import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent }  from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { RessourceComponent } from './FrontOffice/ressource/ressource.component';

const routes: Routes = [
  {
  path:"admin",
  component:AllTemplateBackComponent
  },
  {
    path:"front",
    component:AllTemplateFrontComponent
    },
  {
    path:"test",
    component:AllTemplateFrontComponent
  },
  {
    path:"list",
    component:RessourceComponent
    },
    {
      path:"form",
      component:RessourceBackComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
