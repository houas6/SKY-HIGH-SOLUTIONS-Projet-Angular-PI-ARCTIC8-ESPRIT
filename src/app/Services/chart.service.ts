import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient){ }
  getSatisfactionData() {
    return this.http.get<any[]>('http://localhost:8082/revisionsbd/satisfactionData');
  }
}
