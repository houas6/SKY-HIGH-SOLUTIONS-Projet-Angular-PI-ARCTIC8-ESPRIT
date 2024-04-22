import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Session } from '../Session';
import { SessionService } from '../../Services/session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentServiceService } from '../../Services/comment-service.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  sessions: Session[] = [];
  sessionForm: FormGroup;
comments: Comment[] = [];

  constructor(private sessionService: SessionService, private formBuilder: FormBuilder,private commentService:CommentServiceService) {
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

}
