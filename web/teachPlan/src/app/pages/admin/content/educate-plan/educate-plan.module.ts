import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducatePlanRoutingModule } from './educate-plan-routing.module';
import { EducatePlanAddComponent } from './educate-plan-add/educate-plan-add.component';
import { EducatePlanEditComponent } from './educate-plan-edit/educate-plan-edit.component';
import { EducatePlanViewComponent } from './educate-plan-view/educate-plan-view.component';
import {SharedModule} from "../../../shared/shared.module";
import {EducatePlanComponent} from "./educate-plan.component";
import {NzDescriptionsModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    EducatePlanComponent,
    EducatePlanAddComponent,
    EducatePlanEditComponent,
    EducatePlanViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzDescriptionsModule,
    EducatePlanRoutingModule
  ]
})
export class EducatePlanModule { }
