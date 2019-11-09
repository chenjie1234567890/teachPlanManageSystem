import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminContentComponent} from './content/admin-content.component';


const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{path: '', component: AdminContentComponent}]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
