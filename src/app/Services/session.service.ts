import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../FrontOffice/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl :string = 'http://localhost:8080/crud/'

  constructor(private http:HttpClient) { }
  getSession(): Observable<Session[]>{
    return this.http.get<Session[]>(  this.baseUrl + 'getSession');
  }
}
