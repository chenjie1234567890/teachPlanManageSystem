import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {CoreModule} from '../core/core.module';
import { AdminContentComponent } from './content/admin-content.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from './content/user/user.module';
import {MajorModule} from "./content/major/major.module";
import {CourseModule} from "./content/course/course.module";
import {SemesterModule} from "./content/semester/semester.module";
import {EducatePlanModule} from "./content/educate-plan/educate-plan.module";
import { AdminInfoComponent } from './content/admin-info/admin-info.component';


@NgModule({
  declarations: [
      AdminComponent,
      AdminContentComponent,
      AdminInfoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NzLayoutModule,
    AdminRoutingModule,
    UserModule,
    MajorModule,
    CourseModule,
    SemesterModule,
    EducatePlanModule,
  ],
  exports: [
    AdminContentComponent
  ]
})
export class AdminModule {
}
