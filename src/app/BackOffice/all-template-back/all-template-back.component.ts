import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Component } from '@angular/core';
import { Ressource } from '../../FrontOffice/Ressource';
import { CommonModule } from '@angular/common';
import { RessourceService } from "../../Services/ressource.service";
import { RessourceBackComponent } from "../ressource-back/ressource-back.component";


@Component({
    selector: 'app-all-template-back',
    templateUrl: './all-template-back.component.html',
    styleUrls: ['./all-template-back.component.css'],
   
})
export class AllTemplateBackComponent {
    

}
