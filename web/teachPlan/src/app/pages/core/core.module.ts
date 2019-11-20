import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [CoreComponent, SidebarComponent, BannerComponent, FooterComponent, WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    BannerComponent,
    FooterComponent,
    WelcomeComponent
  ],
  bootstrap: [CoreComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule { }
