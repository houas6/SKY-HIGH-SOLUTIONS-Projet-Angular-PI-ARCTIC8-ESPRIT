import { Component, OnInit } from '@angular/core';
import { Ressource } from '../Ressource';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessourceService } from '../../Services/ressource.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Type } from "../Type";
@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css',

})
export class RessourceComponent implements OnInit{

  Ressources: Ressource[]=[];
  filterType: Type | null = null;

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.fetchRessources();
  }

  fetchRessources(): void {
    this.ressourceService.getRessource().subscribe(
      (data) => {
        this.Ressources = data;
      },
      (error) => {
        console.error('Error fetching resources', error);
      }
    );
  }
  
  downloadFile(ressource: Ressource): string {
    if (ressource.idRessources !== undefined) {
      return 'http://localhost:8089/Gestion-ressources/Ressource/download/' + ressource.idRessources;
    } else {
      console.error('Resource ID is undefined');
      return '';
    }
  }
 
  
  

  getFileName(ressource: Ressource): string {
    // Assuming the file name is stored in the description property
    return ressource.description;
  }
}