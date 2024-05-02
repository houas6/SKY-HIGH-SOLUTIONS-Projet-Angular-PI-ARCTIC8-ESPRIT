import {HttpClient, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private baseUrl = 'http://localhost:8089/Pi/complaint';

  constructor(private http: HttpClient) { }

  getAllComplaints(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  getComplaintsByAuthor(idUser: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getComplaintsByAuthor/${idUser}`);
  }

  getComplaintById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getComplaint/${id}`);
  }

  createComplaint(idUser: number, complaint: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addComplaint/${idUser}`, complaint);
  }

  updateComplaint(id: number, updatedComplaint: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateComplaint/${id}`, updatedComplaint);
  }

  deleteComplaint(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteComplaint/${id}`);
  }

  closeComplaint(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/closeComplaint/${id}`, null);
  }

  uploadImage(file: File, idComplaint: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.baseUrl}/saveImage/${idComplaint}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
