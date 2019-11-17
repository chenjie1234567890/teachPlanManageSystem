import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {NgZorroAntdModule, NzFormModule, NzGridModule} from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    NgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
  ]
})
export class SharedModule { }
