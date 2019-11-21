import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherContentComponent } from './content/teacher-content.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import { CourseComponent } from './content/course/course.component';
import {TeachPlanModule} from "./content/teach-plan/teach-plan.module";


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherContentComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TeacherRoutingModule,
    TeachPlanModule,
  ]
})
export class TeacherModule { }