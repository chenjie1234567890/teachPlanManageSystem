import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherComponent} from "../../teacher.component";
import {TeachPlanViewComponent} from "./teach-plan-view/teach-plan-view.component";
import {TeachPlanAddComponent} from "./teach-plan-add/teach-plan-add.component";
import {TeachPlanEditComponent} from "./teach-plan-edit/teach-plan-edit.component";
import {TeachPlanComponent} from "./teach-plan.component";


const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [{
      path: 'teach-plan',
      component: TeachPlanComponent,
      children: [
        { path: '', component: TeachPlanViewComponent },
        { path: 'add', component: TeachPlanAddComponent },
        { path: 'edit/:id', component: TeachPlanEditComponent },
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachPlanRoutingModule { }
