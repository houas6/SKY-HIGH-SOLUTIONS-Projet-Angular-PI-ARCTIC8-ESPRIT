import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getstats() {
    return this.http.get<any>('http://localhost:8087/Gestion-Reservation/Local/stats');
  }

  getstatsAvliablesLocals() {
    return this.http.get<any[]>('http://localhost:8087/Gestion-Reservation/Local/stats_avliables');
  }
}
