import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../FrontOffice/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl: string = 'http://localhost:8082/revisionsbd/session/';

  constructor(public http: HttpClient) { }

  getSession(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl + 'retrieve-all-sessions');

  }
  addSession(session: Session): Observable<Session>{
    return this.http.post<Session>(this.baseUrl +'add-session',session);
  }
  updateSession(session: Session): Observable<Session> {
    return this.http.put<Session>(this.baseUrl + 'update-session',session);
  }
  deleteSession(id:number): Observable<void> {
    return this.http.delete<void>('http://localhost:8082/revisionsbd/session/remove-session', { params: { 'session-id': id.toString() } });
  }

}
