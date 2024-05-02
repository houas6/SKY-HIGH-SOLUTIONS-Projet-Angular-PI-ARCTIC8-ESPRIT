import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { SessionComponent } from './FrontOffice/session/session.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SessionbackComponent } from './BackOffice/sessionback/sessionback.component';
import {AddcomplaintComponent} from "./FrontOffice/addcomplaint/addcomplaint.component";
import {ComplaintdetailsComponent} from "./FrontOffice/complaintdetails/complaintdetails.component";
import {ComplaintsComponent} from "./FrontOffice/complaints/complaints.component";
import {AllcomplaintsComponent} from "./BackOffice/allcomplaints/allcomplaints.component";
import {ComplaintdetailsadminComponent} from "./BackOffice/complaintdetailsadmin/complaintdetailsadmin.component";

const routes: Routes = [
   {
    path:"admin",
    component:AllTemplateBackComponent
   },
   {
    path:"client",
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
  {path: "allcomplaints",
    component: AllcomplaintsComponent
  },
  {path: "complaintadmin/:id",
    component: ComplaintdetailsadminComponent
  },
  {path: "addcomplaint",
    component: AddcomplaintComponent
  },
  {path: "complaints",
    component: ComplaintsComponent
  },
  {path: "complaint/:id",
    component: ComplaintdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
