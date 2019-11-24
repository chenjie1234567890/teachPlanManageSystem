import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminContentComponent} from './content/admin-content.component';
import {AdminInfoComponent} from "./content/admin-info/admin-info.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminContentComponent
      },
      {
        path: 'personal',
        component: AdminInfoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
