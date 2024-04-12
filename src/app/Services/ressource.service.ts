import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from '../FrontOffice/Ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private baseUrl :string = 'http://localhost:8080/crud/'

  constructor(private http:HttpClient) { }
  getRessource(): Observable<Ressource[]>{
    return this.http.get<Ressource[]>(  this.baseUrl + 'getRessource');
  }

  addRessource(ressource:Ressource): Observable<Ressource>{
    return this.http.post<Ressource>(this.baseUrl+'addOrUpdate', ressource);
  }
}
