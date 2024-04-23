import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reply } from '../FrontOffice/Reply';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyServiceService {

  private baseUrl: string = 'http://localhost:8082/revisionsbd/reply';
  constructor(public http: HttpClient) { }
  createReply( userId:number, reply: string,commentId: number,): Observable<Reply> {
const id =1
    const data = {
      repliedby: { idUser: id },
      repliedAt: { idComment: commentId },
      contentReply: reply
  };
  console.log('data', data);


    return this.http.post<Reply>(`${this.baseUrl}`,  data );
  }
  deleteReply(replyId :number): Observable<any >{
    const userId = 1;
    return this.http.delete(`${this.baseUrl}/${userId}/${replyId}`);
}
}
