import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgZorroAntdModule, NzFormModule, NzGridModule} from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {CourseTypePipe} from "../../pipe/course-type.pipe";
import {TeachTypePipe} from "../../pipe/teach-type.pipe";
import {ExamTypePipe} from "../../pipe/exam-type.pipe";


@NgModule({
  declarations: [
    NotFoundComponent,
    CourseTypePipe,
    TeachTypePipe,
    ExamTypePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    NgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    CourseTypePipe,
    TeachTypePipe,
    ExamTypePipe
  ]
})
export class SharedModule { }
