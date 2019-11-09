import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserViewComponent} from './user-view/user-view.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {AdminComponent} from '../../admin.component';


const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{
    path: 'user',
    component: UserComponent,
    children: [
      {path: '', component: UserViewComponent},
      {path: 'add', component: UserAddComponent},
      {path: 'edit/:id', component: UserEditComponent}]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
