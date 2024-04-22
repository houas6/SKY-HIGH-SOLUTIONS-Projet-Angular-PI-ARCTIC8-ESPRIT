import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sessionIdSource = new BehaviorSubject<number>(0);
  currentSessionId = this.sessionIdSource.asObservable();

  constructor() { }

  changeSessionId(id: number) {
    this.sessionIdSource.next(id);
  }
}
