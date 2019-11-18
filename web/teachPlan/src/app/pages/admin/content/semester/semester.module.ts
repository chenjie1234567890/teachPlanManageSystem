import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterRoutingModule } from './semester-routing.module';
import { SemesterComponent } from './semester.component';
import { SemesterViewComponent } from './semester-view/semester-view.component';
import { SemesterAddComponent } from './semester-add/semester-add.component';
import { SemesterEditComponent } from './semester-edit/semester-edit.component';
import {SharedModule} from "../../../shared/shared.module";
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh'; registerLocaleData(zh);

@NgModule({
  declarations: [SemesterComponent, SemesterViewComponent, SemesterAddComponent, SemesterEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    SemesterRoutingModule
  ]
})
export class SemesterModule { }
