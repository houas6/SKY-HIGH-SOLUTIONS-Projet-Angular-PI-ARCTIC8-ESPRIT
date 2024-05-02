import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';


import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './FrontOffice/session/session.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import { AddcomplaintComponent } from './FrontOffice/addcomplaint/addcomplaint.component';
import { ComplaintsComponent } from './FrontOffice/complaints/complaints.component';
import { ComplaintdetailsComponent } from './FrontOffice/complaintdetails/complaintdetails.component';
import { UpdateComplaintDialogComponent } from './FrontOffice/update-complaint-dialog/update-complaint-dialog.component';
import { AllcomplaintsComponent } from './BackOffice/allcomplaints/allcomplaints.component';
import { ComplaintdetailsadminComponent } from './BackOffice/complaintdetailsadmin/complaintdetailsadmin.component';


@NgModule({


  declarations: [
    AppComponent,

    DynamicComponent,
    HeaderComponent,
    FooterComponent,
    AllTemplateFrontComponent,

    SessionComponent,
      AllTemplateBackComponent,
      SidebarComponent,
      NavbarComponent,
      SessionbackComponent,
      AddcomplaintComponent,
      ComplaintsComponent,
      ComplaintdetailsComponent,
      UpdateComplaintDialogComponent,
      AllcomplaintsComponent,
      ComplaintdetailsadminComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
