import {Component, OnInit} from '@angular/core';
import {ComplaintService} from "../../Services/complaint.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrl: './addcomplaint.component.css'
})
export class AddcomplaintComponent implements OnInit{
  idUser: any;
  idComplaint: any;
  complaintForm!: FormGroup;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  messageComplaint = '';
  messageUploadImage = '';


  showComplaint=true;
  showUploadImage = false;

  constructor(private complaintService: ComplaintService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.idUser=1;
    this.createForm();
  }

  createForm() {
    this.complaintForm = this.fb.group({
      category: ['', Validators.required],
      object: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addComplaint() {
    if (this.complaintForm.valid) {
      const complaint = this.complaintForm.value;
      this.complaintService.createComplaint(this.idUser, complaint).subscribe(
        response => {
          this.idComplaint=response.id;
          console.log('Complaint added successfully!', response);
          this.complaintForm.reset();
          this.showComplaint =false;
          this.showUploadImage = true;
          this.messageComplaint ="Complaint added successfully!";
        },
        error => {
          console.error('Error adding complaint:', error);
          if (error.error && error.error.message) {
            this.messageComplaint = error.error.message;
          } else {
            this.messageComplaint = 'Complaint contains bad words!';
          }
        }
      );
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.complaintService.uploadImage(this.currentFile,this.idComplaint).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.messageUploadImage = 'File uploaded successfully!';
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.messageUploadImage = err.error.message;
            } else {
              this.messageUploadImage = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }


}
