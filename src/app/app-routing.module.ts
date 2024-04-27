import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import { EventBackComponent } from './BackOffice/event-back/event-back.component';

const routes: Routes = [
   {
    path:"adminevent",
    component:AllTemplateBackComponent
   },{
    path:"backevent",
    component:EventBackComponent
    ,data:{title:"Admin| Event "}
   },{
    path:"event",
    component:EventBackComponent
    ,data:{title:"Event"}
   },
   {
    path:"",
    component:AllTemplateBackComponent
   },
   {
    path:"test",
    component:AllTemplateFrontComponent
  },
  {
    path:"frontevent",
    component:AllTemplateFrontComponent
  },
  {
  path:"list",
  component:SessionComponent
  },
  {
    path:"form",
    component:SessionbackComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
