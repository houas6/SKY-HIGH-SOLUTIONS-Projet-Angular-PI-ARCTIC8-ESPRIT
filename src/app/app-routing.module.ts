import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent }  from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';

const routes: Routes = [
  {
  path:"admin",
  component:AllTemplateBackComponent
  },
  {
    path:"test",
    component:AllTemplateFrontComponent
  },
  {
  path:"list",
  component:SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
