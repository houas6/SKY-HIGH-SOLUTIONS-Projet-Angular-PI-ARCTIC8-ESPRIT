import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { ContentComponent } from './BackOffice/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './FrontOffice/session/session.component';
@NgModule({


  declarations: [
    AppComponent,

    DynamicComponent,
    HeaderComponent,
    FooterComponent,
    AllTemplateFrontComponent,
    ContentComponent,
    SessionComponent










  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
