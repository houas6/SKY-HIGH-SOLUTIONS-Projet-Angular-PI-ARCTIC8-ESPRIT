import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8089/Pi/comment';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }

  getCommentsByComplaint(idComplaint: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCommentsByComplaint/${idComplaint}`);
  }

  getCommentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getComment/${id}`);
  }

  createCommenta(idUser: number, idComplaint: number, comment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addComment/${idUser}/${idComplaint}`, comment);
  }

  updateComment(id: number, newComment: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateComment/${id}`, newComment);
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteComment/${id}`);
  }
}
