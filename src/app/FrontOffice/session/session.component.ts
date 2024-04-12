import { Component } from '@angular/core';
import { Session } from '../Session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
sessions: Session[]=[];
}
