import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from "../../admin.component";
import {MajorComponent} from "./major.component";
import {MajorViewComponent} from "./major-view/major-view.component";
import {MajorAddComponent} from "./major-add/major-add.component";
import {MajorEditComponent} from "./major-edit/major-edit.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: 'major',
      component: MajorComponent,
      children: [
        {path: '', component: MajorViewComponent},
        {path: 'add', component: MajorAddComponent},
        {path: 'edit/:id', component: MajorEditComponent}
      ]
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorRoutingModule {
}
