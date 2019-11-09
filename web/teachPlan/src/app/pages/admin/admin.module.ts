import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {CoreModule} from '../core/core.module';
import { AdminContentComponent } from './content/admin-content.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from './content/user/user.module';


@NgModule({
  declarations: [
      AdminComponent,
      AdminContentComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NzLayoutModule,
    AdminRoutingModule,
    UserModule,
  ],
})
export class AdminModule {
}
