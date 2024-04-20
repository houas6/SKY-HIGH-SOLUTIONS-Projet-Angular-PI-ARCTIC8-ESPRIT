import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ReactiveFormsModule } from '@angular/forms';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
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
      RessourceBackComponent
    










  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarComponent,NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
