import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  idUser?: number;
  nom?: string;
  prenom?: string;
  mail?: string;
  num_tel?: number;
  constructor() { }
}
