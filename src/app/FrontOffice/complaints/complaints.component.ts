import {Component, OnInit} from '@angular/core';
import {ComplaintService} from "../../Services/complaint.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent implements OnInit{
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
    this.idUser = 1; // this.storageService.getUser().id
    this.getComplaintsByAuthor()
  }

  getComplaintsByAuthor() {
    this.complaintService.getComplaintsByAuthor(this.idUser).subscribe(
      (complaints) => {
        this.complaints = complaints;
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
        this.getComplaintsByAuthor();
      });
  }

  deleteComplaint(id: number) {
    if (window.confirm('Are you sure you want to delete this Complaint?')) {
      this.complaintService.deleteComplaint(id).subscribe(() => {
        this.getComplaintsByAuthor();
      });
    }
  }

  openUpdateDialog(complaint: any) {
    this.complaintToUpdate = complaint;
    this.showUpdateDialog = true;
  }

}
