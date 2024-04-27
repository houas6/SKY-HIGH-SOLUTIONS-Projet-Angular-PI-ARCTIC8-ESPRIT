import { Component } from '@angular/core';
import { SessionService } from './Services/session.service';
import { Session } from './FrontOffice/Session';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testAng';
  sessions: Session[] = [];
  constructor(private sessionService: SessionService,private router: Router,private activatedRoute: ActivatedRoute,private titleService:Title){
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(()=> this.activatedRoute),
      map((route) =>{
        while(route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === "primary"),
      mergeMap((route) => route.data)
    ).subscribe((event)=> this.titleService.setTitle(event["title"])); }
  ngOnInit(): void {
    this.loadSessions();
  }
  loadSessions():void  {
    this.sessionService.getSession().subscribe((sessions: Session[]) => {
      this.sessions = sessions;
    });
  }

}
