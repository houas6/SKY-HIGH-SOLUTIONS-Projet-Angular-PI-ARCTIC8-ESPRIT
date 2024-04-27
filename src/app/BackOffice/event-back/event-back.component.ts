import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventModel } from '../../model/Event';
import { EventService } from '../../Services/event/event.service';
@Component({
  selector: 'app-event-back',
  templateUrl: './event-back.component.html',
  styleUrls: ['./event-back.component.css']
})
export class EventBackComponent implements OnInit {
  eventForm: FormGroup;
  events: EventModel[] = [];
  selectedEvent: EventModel | null = null;
  modalites:string[]= ['Hybride','Online','Presentiel'];
  editEvent: EventModel | null = null;

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      status: ['', Validators.required],
      capacity: ['', Validators.required],
      event_img_url: ['', Validators.required],
      event_img_name: ['', Validators.required],
      modalite: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }
 
  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      events => this.events = events,
      error => console.error('Error loading the events', error)
    );
  }

  findEventById(id: number) {
    // Call your service to search by id
    this.eventService.getEventById(id).subscribe(
      (data) => {
        this.events = [data];
      },
      (error) => {
        console.error('Error fetching event', error);
      }
    );
  }
// Add this method in your component
findById(): void {
  const id = this.eventForm.get('id')?.value;
  if (id) {
    this.eventService.getEventById(id).subscribe(
      (event) => {
        if (event) {
          this.events = [event];
        } else {
          alert('No event found with the given ID.');
        }
      },
      (error) => {
        console.error('Error fetching event', error);
        alert('An error occurred while fetching the event. Please try again.');
      }
    );
  } else {
    alert('Please enter an ID before searching.');
  }
}
  addEvent(): void {
    console.log(this.eventForm.value);

    if (this.eventForm.valid) {
      const newEvent: EventModel = this.eventForm.value;
      newEvent.users=[];
      this.eventService.addEvent(newEvent).subscribe(
        newEvent => {
          if (newEvent) {
            this.events.push(newEvent);
            this.eventForm.reset();
          } else {
            alert('Failed to add the event. Please try again.');
          }
        },
        error => {
          console.error('Error adding the event', error);
          alert('An error occurred while adding the event. Please try again.');
        }
      );
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
  

  updateEvent(): void {
    if (this.selectedEvent && this.eventForm.valid) {
      const updatedEvent: EventModel = {...this.selectedEvent, ...this.eventForm.value};
      this.eventService.updateEvent(updatedEvent.id, updatedEvent).subscribe(
        () => {
          const index = this.events.findIndex(e => e.id === updatedEvent.id);
          if (index !== -1) {
            this.events[index] = updatedEvent;
          }
          this.eventForm.reset();
          this.selectedEvent = null;
        },
        error => console.error('Error updating the event', error)
      );
    }
  }

  selectEvent(event: EventModel): void {
    this.selectedEvent = event;
    this.eventForm.patchValue(event);
  }

  deleteEvent(id: number): void {
    this.eventService.removeEvent(id).subscribe(
      () => this.events = this.events.filter(event => event.id !== id),
      error => console.error('Error deleting the event', error)
    );
  }
  
}
