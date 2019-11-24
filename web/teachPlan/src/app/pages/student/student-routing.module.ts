import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentContentComponent} from "./content/student-content.component";
import {StudentInfoComponent} from "./content/student-info/student-info.component";
import {StudentComponent} from "./student.component";
import {EducateComponent} from "./content/educate/educate.component";
import {CourseComponent} from "./content/course/course.component";


const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentContentComponent,
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'educate',
        component: EducateComponent
      },
      {
        path: 'personal',
        component: StudentInfoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
