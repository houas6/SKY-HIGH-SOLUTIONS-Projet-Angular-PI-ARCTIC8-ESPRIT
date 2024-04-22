import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import { CommentComponent } from './FrontOffice/comment/comment.component';

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
  },
  {
    path:"form",
    component:SessionbackComponent
  },
  {
    path:"comment",
    component:CommentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
