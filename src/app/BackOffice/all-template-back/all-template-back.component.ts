import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Component } from '@angular/core';
import { Ressource } from '../../FrontOffice/Ressource';
import { CommonModule } from '@angular/common';
import { RessourceService } from "../../Services/ressource.service";
import { RessourceBackComponent } from "../ressource-back/ressource-back.component";
import { ManageStudyGroupService } from "../../Services/manage-study-group.service";
import { ManageLocalService } from "../../Services/manage-local.service";


@Component({
    selector: 'app-all-template-back',
    templateUrl: './all-template-back.component.html',
    styleUrls: ['./all-template-back.component.css'],
   
})
export class AllTemplateBackComponent {
    StudyGroups: any[] = [];
    locals : any[] =[];
    searchText: string = '';
    selectedLocalIds: any[] =[] ;
    constructor(private dataService: ManageStudyGroupService,
      private dataServiceLocal : ManageLocalService) { }
  
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
    
    
//get all studygroups by id of local 

  studygroupsbyid: any[] = [];
  fetchstudygroupsByid_local(id_local : any) {
    this.dataService.getStudyGroupsByLocalId(id_local).subscribe(
      (data: any[]) => {
        console.log(data)
        this.studygroupsbyid = data
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }


}
