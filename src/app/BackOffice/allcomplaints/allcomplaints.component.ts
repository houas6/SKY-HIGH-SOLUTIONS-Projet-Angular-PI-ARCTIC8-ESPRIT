import {Component, OnInit} from '@angular/core';
import {ComplaintService} from "../../Services/complaint.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrl: './allcomplaints.component.css'
})
export class AllcomplaintsComponent implements OnInit{
  complaints!: any[];
  idUser!: any;

  selectedStatus: string = '';
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;

  complaintToUpdate: any;
  showUpdateDialog: boolean = false;

  constructor(private complaintService: ComplaintService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAllComplaints()
  }

  getAllComplaints() {
    this.complaintService.getAllComplaints().subscribe(
      (complaints) => {
        this.complaints = complaints;
        this.renderChart();
        console.log("Complaints fetched succesfully!")
      },
      (error) => {
        console.error('Error fetching complaints:', error);
      }
    );
  }

  getImageUrl(imageName: string): SafeResourceUrl {
    const url = `http://localhost:8089/Pi/complaint/loadImage/${imageName}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  filterComplaints(): any[] {
    let filteredComplaints = this.complaints;

    if (this.searchTerm) {
      filteredComplaints = filteredComplaints.filter(complaint =>
        complaint.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        complaint.object.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        complaint.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedStatus) {
      filteredComplaints = filteredComplaints.filter(complaint => complaint.status === this.selectedStatus);
    }

    this.totalPages = Math.ceil(filteredComplaints.length / this.itemsPerPage);
    return filteredComplaints.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }


  updateComplaint(id: number, updatedComplaint: any): void {
    this.complaintService.updateComplaint(id, updatedComplaint)
      .subscribe(complaint => {
        this.showUpdateDialog = false;
        this.getAllComplaints();
      });
  }

  deleteComplaint(id: number) {
    if (window.confirm('Are you sure you want to delete this Complaint?')) {
      this.complaintService.deleteComplaint(id).subscribe(() => {
        this.getAllComplaints();
      });
    }
  }

  openUpdateDialog(complaint: any) {
    this.complaintToUpdate = complaint;
    this.showUpdateDialog = true;
  }

  renderChart(): void {
    const chartOptions = {
      series: [this.complaints.filter(complaint => complaint.status === 'OnHold').length,
               this.complaints.filter(complaint => complaint.status === 'InProgress').length,
               this.complaints.filter(complaint => complaint.status === 'Closed').length],
      labels: ['On Hold', 'In Progress', 'Closed'],
      chart: {
        type: 'pie',
        height: 350
      },
      title: {
        text: 'Complaints by Status',
        align: 'left'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chartElement = document.querySelector('#chart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement as HTMLElement, chartOptions);
      chart.render();
    }
  }

}
