import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudygService {
  constructor(private http: HttpClient) { }
  getSession(){
    return this.http.get('http://localhost:8089/Studygroup/retrieve-all-StudyGroup')
  }
  updateSession(id:any,user:any){

    return this.http.put('http://localhost:8089/Studygroup/modify-studygroup/'+id,user)
   }

  addSession(user:any){
    return this.http.post('http://localhost:8089/Studygroup/addStudyGroup',user)
  }


  deleteSession(id:any){

    return this.http.delete('http://localhost:8089/Studygroup/remove-studygroup/'+id)
  }

  sessionDetails(id:any){

    return this.http.get('http://localhost:8089/Studygroup/retrieve-studygroup/'+id)
  }

  incrementNbpIfUnderFive(id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8089/Studygroup/increment-nbp/${id}`, {});
  }
  getLocal(){
    return this.http.get('http://localhost:8089/Local/names')
  }
  idNameLocal(name: any): Observable<any> {
    return this.http.get(`http://localhost:8089/Local/idByName/${name}`);
  }
  createStudygroupWithLocal(studygroup: any, localId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8089/Studygroup/create-studygroup-with-local/${localId}`, studygroup);
  }
}
