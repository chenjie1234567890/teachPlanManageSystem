import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {CoreModule} from './pages/core/core.module';
import {RouterModule} from '@angular/router';
import {SetupModule} from './pages/setup/setup.module';
import {MyInterceptor} from './app.myInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AdminModule} from './pages/admin/admin.module';
import {SharedModule} from './pages/shared/shared.module';
import {TeacherModule} from "./pages/teacher/teacher.module";
import { CourseTypePipe } from './pipe/course-type.pipe';
import {StudentModule} from "./pages/student/student.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    CoreModule,
    SharedModule,
    SetupModule,
    AdminModule,
    TeacherModule,
    StudentModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
