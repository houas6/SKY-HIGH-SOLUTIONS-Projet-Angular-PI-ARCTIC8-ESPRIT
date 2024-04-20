import { Component } from '@angular/core';
import { SessionService } from './Services/session.service';
import { Session } from './FrontOffice/Session';
import { RessourceService } from './Services/ressource.service';
import { Ressource } from './FrontOffice/Ressource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testAng';
  sessions: Session[] = [];
  Ressources: Ressource[]= [];
  constructor(protected sessionService: SessionService,private ressourceService: RessourceService){}
  ngOnInit(): void {
  //  this.loadSessions();
    this.loadRessources();
  }
 /* loadSessions():void  {
    this.sessionService.getSession().subscribe((sessions: Session[]) => {
      this.sessions = sessions;
    });
 }*/
 loadRessources():void  {
  this.ressourceService.getRessource().subscribe((ressources: Ressource[]) => {
    this.Ressources = ressources;
  });
}

}



