
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudygService } from 'src/app/services/studyg.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder et FormGroup depuis @angular/forms

@Component({
  selector: 'app-add-studyg',
  templateUrl: './add-studyg.component.html',
  styleUrls: ['./add-studyg.component.css']
})

export class AddStudygComponent implements OnInit {
  siteKey: string;
  theme:string;
  recaptchaTheme: 'dark' | 'light' = 'light';
  levels = ['premiere', 'deuxieme', 'troisieme'];
  fournisseur: any = { dateSession: null, local_id_local: null };
  localNames: any;
  protected aFormGroup: FormGroup = new FormGroup({});

  constructor(
    private service: StudygService,
    private router: Router,
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
    // Importez FormBuilder depuis @angular/forms
  ) {
    this.siteKey='6Leba9QpAAAAALflZxTw4_McTj1Q7HVRS5J5NcrX ';
    this.theme='light';
   }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['']
    });
    this.getLocalNames();
  }

  getLocalNames(): void {
    this.service.getLocal().subscribe(
      data => this.localNames = data
    );
  }

  onLocalSelect(event: Event): void {
    const localName = (event.target as HTMLSelectElement).value;
    this.service.idNameLocal(localName).subscribe(
      (id: number) => {
        this.fournisseur.local_id_local = id;
      }
    );
  }

  ajouter(): void {
    this.service.createStudygroupWithLocal(this.fournisseur, this.fournisseur.local_id_local).subscribe(
      () => { // Retirez 'session: any' car il n'est pas utilisé
        this.navigate();
      },
      (error: any) => {
        console.error("Error adding studygroup:", error);
        // Handle error, if needed
        this.toastr.error('ggghh');
      }
    );
  }


  navigate() {
    this.router.navigate(['sky']);
  }
  handleReset(): void {
    console.log('Recaptcha reset');
  }

  handleExpire(): void {
    console.log('Recaptcha expired');
  }

  handleLoad(): void {
    console.log('Recaptcha loaded');
  }

  handleSuccess(event: any): void {
    console.log('Recaptcha success', event);
  }
}

export class AppModule {}
