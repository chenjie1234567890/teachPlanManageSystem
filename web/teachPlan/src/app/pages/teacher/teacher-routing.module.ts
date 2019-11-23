import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeacherComponent} from "./teacher.component";
import {TeacherContentComponent} from "./content/teacher-content.component";
import {CourseComponent} from "./content/course/course.component";
import {TeacherInfoComponent} from "./content/teacher-info/teacher-info.component";


const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        component: TeacherContentComponent,
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'personal',
        component: TeacherInfoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
