import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {IconsProviderModule} from '../../icons-provider.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [SetupComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    IconsProviderModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
  ],
  exports: [
    SetupComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class SetupModule { }
