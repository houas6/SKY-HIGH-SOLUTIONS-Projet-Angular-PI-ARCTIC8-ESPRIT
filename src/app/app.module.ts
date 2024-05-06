import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './FrontOffice/session/session.component';
import { RessourceComponent } from './FrontOffice/ressource/ressource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { AddLocal2Component } from './BackOffice/add-local-2/add-local-2.component';
import { AddStudyGroupComponent } from './BackOffice/add-study-group/add-study-group.component';
import { ViewLocalComponent } from './BackOffice/view-local/view-local.component';
import { ViewStudyGroupComponent } from './BackOffice/view-study-group/view-study-group.component';
import { NewCompoentComponent } from './new-compoent/new-compoent.component';
import { PccComponent } from './BackOffice/pcc/pcc.component';
import { AngularChartjsComponent } from './BackOffice/angular-chartjs/angular-chartjs.component';
import { WithoutSBComponent } from './without-sb/without-sb.component';
import { TotalCComponent } from './BackOffice/total-c/total-c.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({


  declarations: [
    AppComponent,

    DynamicComponent,
    HeaderComponent,
    FooterComponent,
    AllTemplateFrontComponent,

    SessionComponent,
      AllTemplateBackComponent,
      RessourceComponent,
      RessourceBackComponent,
      AddLocal2Component,
      AddStudyGroupComponent,
      ViewLocalComponent,
      ViewStudyGroupComponent,
      NewCompoentComponent,
      PccComponent,
      AngularChartjsComponent,
      WithoutSBComponent,
      TotalCComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarComponent,NavbarComponent,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
