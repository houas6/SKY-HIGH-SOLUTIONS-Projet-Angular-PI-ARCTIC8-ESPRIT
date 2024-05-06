import { Component } from '@angular/core';
import { ManageLocalService } from '../Services/manage-local.service';
import { ManageStudyGroupService } from '../Services/manage-study-group.service';

@Component({
  selector: 'app-without-sb',
  templateUrl: './without-sb.component.html',
  styleUrl: './without-sb.component.css'
})
export class WithoutSBComponent {
  StudyGroups: any[] = [];
  locals: any[] = [];
  searchText: string = '';
  selectedLocalIds: any[] = [];
  constructor(private dataService: ManageStudyGroupService,
    private dataServiceLocal: ManageLocalService) { }

  ngOnInit() {
    this.fetchLocals();
  }

  fetchLocals() {
    this.dataServiceLocal.getLocals().subscribe(
      (data: any[]) => {
        console.log(data)
        this.locals = data;
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }

  fetchAvliablesLocals() {
    this.dataServiceLocal.getAvliablesLocals().subscribe(
      (data: any[]) => {
        console.log(data)
        this.StudyGroups = data;
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }


  getColor(totalGroups: number): string {
    return totalGroups === 0 ? 'green' : 'orange';
  }

  get filteredLocals() {
    return this.locals.filter(local =>
      local.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      local.bloc.toLowerCase().includes(this.searchText.toLowerCase()) ||
      local.idLocal.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
      local.capacity.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
      local.total_group_study.toString().toLowerCase().includes(this.searchText.toLowerCase())
    );
  }




}
