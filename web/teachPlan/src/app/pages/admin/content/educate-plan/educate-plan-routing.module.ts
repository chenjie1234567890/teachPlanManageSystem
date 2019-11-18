import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "../../admin.component";
import {EducatePlanComponent} from "./educate-plan.component";
import {EducatePlanViewComponent} from "./educate-plan-view/educate-plan-view.component";
import {EducatePlanAddComponent} from "./educate-plan-add/educate-plan-add.component";
import {EducatePlanEditComponent} from "./educate-plan-edit/educate-plan-edit.component";



const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'educate-plan',
      component: EducatePlanComponent,
      children: [
        {path: '', component: EducatePlanViewComponent},
        {path: 'add', component: EducatePlanAddComponent},
        {path: 'edit/:id', component: EducatePlanEditComponent}
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducatePlanRoutingModule { }
