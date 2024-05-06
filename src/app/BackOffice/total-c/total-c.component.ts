import { Component, OnInit } from '@angular/core';
import { TotalServicesService } from '../../Services/total-services.service';

@Component({
  selector: 'app-total-c',
  templateUrl: './total-c.component.html',
  styleUrl: './total-c.component.css'
})
export class TotalCComponent implements OnInit {

  Total: number | undefined;

  constructor(private TotalServicesService: TotalServicesService) { }

  ngOnInit(): void {
    this.getLocalStatistics();
  }

  getLocalStatistics(): void {
    this.TotalServicesService.getTotalNumberOfLocals().subscribe(
      total => {
        this.Total = total;
      },
      error => {
        console.log('Error fetching total number of classrooms:', error);
      }
    );
  }
} {

}
