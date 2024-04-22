import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../FrontOffice/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private baseUrl: string = 'http://localhost:8082/revisionsbd/comment';
  constructor(public http: HttpClient) { }
  // Get all comments
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + '/retrieve-all-comments');
  }
  createComment(sessionId: number, content: string): Observable<Comment> {
    const userId = 1;
    const data = {
      content: content,
      sessionComment: {
        idSession: sessionId
      }
    };
    return this.http.post<Comment>(`${this.baseUrl}/${userId}/${sessionId}`, data);
  }

  deleteComment( commentId: number): Observable<any> {
    const userId = 1;
    return this.http.delete(`${this.baseUrl}/${userId}/${commentId}`);
  }

}
