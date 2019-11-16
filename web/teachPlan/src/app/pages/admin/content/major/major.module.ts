import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorRoutingModule } from './major-routing.module';
import { MajorComponent } from './major.component';
import { MajorViewComponent } from './major-view/major-view.component';
import { MajorAddComponent } from './major-add/major-add.component';
import { MajorEditComponent } from './major-edit/major-edit.component';
import {NzFormModule, NzGridModule} from "ng-zorro-antd";
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MajorComponent,
    MajorViewComponent,
    MajorAddComponent,
    MajorEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    MajorRoutingModule
  ]
})
export class MajorModule { }
