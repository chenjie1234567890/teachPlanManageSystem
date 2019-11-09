import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './pages/shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
