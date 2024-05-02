import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageLocalService {

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post<any>('http://localhost:8087/Gestion-Reservation/Local', data);
  }

  getLocals() {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Local');
  }

  getAvliablesLocals(){
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Local/avliables');
  }

}
