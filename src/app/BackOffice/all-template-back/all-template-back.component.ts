import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";



@Component({
    selector: 'app-all-template-back',
    standalone: true,
    templateUrl: './all-template-back.component.html',
    styleUrl: './all-template-back.component.css',
    imports: [SidebarComponent, NavbarComponent]
})
export class AllTemplateBackComponent {

}
