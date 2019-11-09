import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserViewComponent} from './user-view/user-view.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [
    UserComponent,
    UserViewComponent,
    UserAddComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
