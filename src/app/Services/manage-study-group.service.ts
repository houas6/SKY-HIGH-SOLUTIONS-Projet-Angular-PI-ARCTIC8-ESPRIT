import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageStudyGroupService {

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post<any>('http://localhost:8087/Gestion-Reservation/Studygroup', data);
  }
  getStudyGroups() {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Studygroup');
  }
  getStudyGroupsbyStatusClose() {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Studygroup/ByStatus/close');
  }
  getStudyGroupsbyStatusOpen() {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Studygroup/ByStatus/open');
  }
  getStudyGroupsByLocalId(id_local: any) {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Studygroup/getByIdLocal/'+id_local);
  }
  Match(id_study_group: number, id_local: number) {
    console.log("match service")
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id_study_group', id_study_group)
    queryParams = queryParams.append('id_local', id_local);
    console.log(queryParams)
    return this.http.put<any>('http://localhost:8087/Gestion-Reservation/Studygroup/affecter',null, { params : queryParams});
  }
}
