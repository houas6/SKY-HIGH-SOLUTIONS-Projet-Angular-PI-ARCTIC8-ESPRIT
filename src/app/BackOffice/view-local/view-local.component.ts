import { Component } from '@angular/core';
import { ManageLocalService } from '../../Services/manage-local.service';

@Component({
  selector: 'app-view-local',
  templateUrl: './view-local.component.html',
  styleUrl: './view-local.component.css'
})
export class ViewLocalComponent {
  locals: any[] = [];

  constructor(private dataService: ManageLocalService) { }

  ngOnInit() {
    this.fetchLocals();
  }

  fetchLocals() {
    this.dataService.getLocals().subscribe(
      (data: any[]) => {
        console.log(data)
        this.locals = data;
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }
}
