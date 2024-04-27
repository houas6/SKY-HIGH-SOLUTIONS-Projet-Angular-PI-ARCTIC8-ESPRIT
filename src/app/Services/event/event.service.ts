import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8082/revisionsbd/event';

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.baseUrl}/getAllEvents`);
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/getEventById/${id}`);
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(`${this.baseUrl}/addEvent`, event);
  }

  removeEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeEvent/${id}`);
  }

  updateEvent(id: number, event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.baseUrl}/updateEvent/${id}`, event);
  }

  addUserToEvent(eventId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${eventId}/users/${userId}`, null);
  }
}
