import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "../../admin.component";
import {SemesterComponent} from "./semester.component";
import {SemesterViewComponent} from "./semester-view/semester-view.component";
import {SemesterAddComponent} from "./semester-add/semester-add.component";
import {SemesterEditComponent} from "./semester-edit/semester-edit.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'semester',
      component: SemesterComponent,
      children: [
        {path: '', component: SemesterViewComponent},
        {path: 'add', component: SemesterAddComponent},
        {path: 'edit/:id', component: SemesterEditComponent}
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemesterRoutingModule { }
