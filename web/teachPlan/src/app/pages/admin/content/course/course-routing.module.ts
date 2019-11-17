import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "../../admin.component";
import {CourseComponent} from "./course.component";
import {CourseViewComponent} from "./course-view/course-view.component";
import {CourseAddComponent} from "./course-add/course-add.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'course',
      component: CourseComponent,
      children: [
        {path: '', component: CourseViewComponent},
        {path: 'add', component: CourseAddComponent},
        {path: 'edit/:id', component: CourseEditComponent}
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
