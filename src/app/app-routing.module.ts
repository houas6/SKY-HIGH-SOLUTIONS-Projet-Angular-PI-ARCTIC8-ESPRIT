import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import { CommentComponent } from './FrontOffice/comment/comment.component';
import { ReplyComponent } from './FrontOffice/reply/reply.component';
import { ChartComponent } from './BackOffice/chart/chart.component';

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
  },
  {
    path:"chart",
    component:ChartComponent
  },
  {
    path:"reply",
    component:ReplyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
