import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from '../FrontOffice/Ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private baseUrl :string = 'http://localhost:8089/Gestion-ressources/Ressource/'
  private baseUrl1 :string = 'http://localhost:8089/Gestion-ressources/'
  constructor(public http:HttpClient) { }
  
  getRessource(): Observable<Ressource[]>{
    return this.http.get<Ressource[]>(  this.baseUrl + 'retrieve-all-Ressources');
  }

  addRessource(ressource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.baseUrl + 'add-Ressource', ressource);
} 

/*addRessource(ressource: Ressource): Observable<Ressource> {
  const url = `${this.baseUrl1}add-Ressource`;
  return this.http.post<Ressource>(url, ressource);
}*/

 
  updateRessource(ressource: Ressource): Observable<Ressource> {
    return this.http.put<Ressource>(this.baseUrl + 'modify-Ressource',ressource);
  }
  deleteRessource(id: number): Observable<void> {
    const url = `http://localhost:8089/Gestion-ressources/Ressource/remove-Ressource/${id}`;
    return this.http.delete<void>(url);
  }
  

}
