import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentContentComponent } from './content/student-content.component';
import { CourseComponent } from './content/course/course.component';
import { EducateComponent } from './content/educate/educate.component';
import { StudentInfoComponent } from './content/student-info/student-info.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import {Teacher} from "../../entity/teacher";
import {TeacherModule} from "../teacher/teacher.module";

@NgModule({
  declarations: [
    StudentComponent,
    StudentContentComponent,
    CourseComponent,
    EducateComponent,
    StudentInfoComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TeacherModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
