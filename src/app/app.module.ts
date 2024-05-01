import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './FrontOffice/session/session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import { CommentComponent } from './FrontOffice/comment/comment.component';

import { CommonModule } from '@angular/common';
import { ReplyComponent } from './FrontOffice/reply/reply.component';
import { ChartComponent } from './BackOffice/chart/chart.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



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
      CommentComponent,
      ReplyComponent,
      ChartComponent,
      NavbarComponent









  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    CommonModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
