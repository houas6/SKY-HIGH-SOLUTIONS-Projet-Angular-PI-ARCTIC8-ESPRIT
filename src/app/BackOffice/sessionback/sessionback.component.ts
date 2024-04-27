import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Session } from '../../FrontOffice/Session';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-sessionback',
  templateUrl: './sessionback.component.html',
  styleUrl: './sessionback.component.css'
})
export class SessionbackComponent implements OnInit{
  sessionForm: FormGroup;
  modalites:string[]= ['Hybride','Online','Presentiel'];
  sessions: Session[] = [];
  editSession: Session | null = null;
  
  constructor( private formBuilder: FormBuilder,private sessionService: SessionService){

    this.sessionForm = this.formBuilder.group({
      idSession: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Date_debut: ['', [Validators.required, Validators.pattern('^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:0[13-9]|1[0-2])-(?:30)|(?:0[13578]|1[02])-31)$')]],
      duree: ['', [Validators.required, Validators.max(2)]],
      nbr_personne: ['', [Validators.required, Validators.max(20)]],
      topic: ['', Validators.required],
      modalite: ['', Validators.required],
      instructor: this.formBuilder.group({
        idUser: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        nom: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]]
      })
    });
  }
 


findByName() {
  // Call your service to search by name
}


  ngOnInit() {
    this.sessionService.getSession().subscribe(
      (data) => {
        this.sessions = data;
        console.log(this.sessions);

      },
      (error) => {
        console.error('Error fetching sessions', error);
      }
    );
  }
  
  addSession() {
    // Create a new session from the form values
    const newSession: Session = this.sessionForm.value;

    // Add the new session to the sessions array
    this.sessionService.addSession(newSession).subscribe(
      (data) => {
        // If successful, add the new session to the sessions array
        this.sessions.push(data);

        // Reset the form
        this.sessionForm.reset();
      },
      (error) => {
        console.error('Error adding session', error);
      }
    );
  }
  upSession(): void {
    if (this.editSession && this.sessionForm.valid) {
      const upSession: Session = {...this.editSession, ...this.sessionForm.value} as Session;
      this.sessionService.updateSession(upSession).subscribe(() => {
        this.sessionForm.reset();
        this.editSession = null;
      });
    }

  }


  editSessions(session:Session):void{
 this.editSession =session;
 this.sessionForm.patchValue({
  idSession: session.idSession,
  Date_debut: session.Date_debut,
  duree: session.duree,
  nbr_personne: session.nbr_personne,
  topic: session.topic,
  modalite: session.modalite,
  instructor: {
    idUser: session.instructor.idUser,
    nom: session.instructor.nom,
  }
});
  }
  deleteSession(id: number) {
    this.sessionService.deleteSession(id).subscribe(
      response => {
        console.log(response);
         // Refresh the list after deletion
      },
      error => {
        console.log('Error', error);
      }
    );
  }


}


