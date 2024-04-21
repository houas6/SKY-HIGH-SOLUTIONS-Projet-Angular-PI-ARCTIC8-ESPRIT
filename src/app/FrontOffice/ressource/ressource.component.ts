import { Component, OnInit } from '@angular/core';
import { Ressource } from '../Ressource';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessourceService } from '../../Services/ressource.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css',

})
export class RessourceComponent implements OnInit{

  Ressources: Ressource[]=[];

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
}