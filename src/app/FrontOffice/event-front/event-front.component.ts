import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event/event.service';
import { EventModel } from '../../model/Event';

@Component({
  selector: 'app-event-front',
  templateUrl: './event-front.component.html',
  styleUrl: './event-front.component.css'
})
export class EventFrontComponent implements OnInit{
  events?: EventModel[];
  constructor(private eventService: EventService){
  }
  ngOnInit(): void {
      this.eventService.getAllEvents().subscribe(
        (events: EventModel[])=> {
          this.events=events;

        },
        (error) => {
          console.error("Error loading the events", error);
        }
      );
  }

}
