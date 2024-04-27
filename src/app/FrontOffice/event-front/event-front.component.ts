import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event/event.service';
import { EventModel } from '../../model/Event';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-front',
  templateUrl: './event-front.component.html',
  styleUrl: './event-front.component.css'
})
export class EventFrontComponent implements OnInit{
  events: EventModel[] = [];
  selectedEvent: EventModel | null = null;

  constructor(private route: ActivatedRoute, private eventService: EventService){
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
  viewEvent(id: number) {
    this.selectedEvent = this.events.find(event => event.id === id) || null;
  }
}
