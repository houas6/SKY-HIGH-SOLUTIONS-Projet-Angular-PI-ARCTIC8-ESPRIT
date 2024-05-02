import { Component } from '@angular/core';
import { SessionService } from './Services/session.service';
import { Session } from './FrontOffice/Session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testAng';
  sessions: Session[] = [];
  constructor(private sessionService: SessionService){}
  ngOnInit(): void {
    //this.loadSessions();
  }
  loadSessions():void  {
    this.sessionService.getSession().subscribe((sessions: Session[]) => {
      this.sessions = sessions;
    });
  }
}
