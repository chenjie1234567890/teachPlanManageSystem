import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

/**
 * 自定义拦截器
 */
@Injectable({
  providedIn: 'root'
  }
)
export class MyInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private message: NzMessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      url: `api/${req.url}`       // 添加默认api访问路径
    });

    return next.handle(cloneRequest).pipe(
      mergeMap((event: any) => {
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleHttpException(error);
      })
    );
  }

  private handleHttpException(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    switch (error.status) {
      case 401:
        if (this.router.url !== '/setup/login') {
          // 未登录，跳转到登录页
          this.router.navigateByUrl('/setup/login');
        }
        this.message.error('登录失败');
        break;
      case 403:
        this.message.error('权限不足');
        break;
      case 404:
        this.message.error('页面不存在');
        break;
    }
    // 最终将异常抛出来，便于组件个性化处理
    throw error;
  }
}
