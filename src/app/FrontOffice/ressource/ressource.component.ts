import { Component, OnInit } from '@angular/core';
import { Ressource } from '../Ressource';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent {
  Ressources: Ressource[]=[];
}
