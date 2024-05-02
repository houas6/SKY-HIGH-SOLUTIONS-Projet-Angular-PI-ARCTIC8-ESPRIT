import { Component } from '@angular/core';
import { ManageStudyGroupService } from '../../Services/manage-study-group.service';

@Component({
  selector: 'app-view-study-group',
  templateUrl: './view-study-group.component.html',
  styleUrl: './view-study-group.component.css'
})
export class ViewStudyGroupComponent {

  StudyGroups: any[] = [];

  constructor(private dataService: ManageStudyGroupService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.dataService.getStudyGroups().subscribe(
      (data: any[]) => {
        console.log(data)
        this.StudyGroups = data;
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }
}
