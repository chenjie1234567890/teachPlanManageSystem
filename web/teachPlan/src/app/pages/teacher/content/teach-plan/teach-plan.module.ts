import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachPlanRoutingModule } from './teach-plan-routing.module';
import {TeachPlanComponent} from "./teach-plan.component";
import {TeachPlanViewComponent} from "./teach-plan-view/teach-plan-view.component";
import {TeachPlanAddComponent} from "./teach-plan-add/teach-plan-add.component";
import {TeachPlanEditComponent} from "./teach-plan-edit/teach-plan-edit.component";
import {NzLayoutModule} from "ng-zorro-antd";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    TeachPlanComponent,
    TeachPlanViewComponent,
    TeachPlanAddComponent,
    TeachPlanEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeachPlanRoutingModule
  ]
})
export class TeachPlanModule { }
