import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from '../FrontOffice/Ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private baseUrl :string = 'http://localhost:8089/Gestion-ressources/Ressource/'

  constructor(private http:HttpClient) { }
  getRessource(): Observable<Ressource[]>{
    return this.http.get<Ressource[]>(  this.baseUrl + 'retrieve-all-Ressources');
  }

  addRessource(ressource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.baseUrl + 'add-Ressource', ressource);
}

 
  updateRessource(ressource: Ressource): Observable<Ressource> {
    return this.http.put<Ressource>(this.baseUrl + 'modify-Ressource',ressource);
  }
  deleteRessource(id:number): Observable<void> {
    return this.http.delete<void>('http://localhost:8089/Gestion-ressources/Ressource/remove-Ressource/', { params: { 'idRessource': id.toString() } });
  }

}
