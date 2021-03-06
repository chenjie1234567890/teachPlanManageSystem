import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import {SharedModule} from "../../../shared/shared.module";
import {NzInputNumberModule, NzModalModule, NzRadioModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    CourseComponent,
    CourseViewComponent,
    CourseAddComponent,
    CourseEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NzInputNumberModule,
    NzRadioModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
