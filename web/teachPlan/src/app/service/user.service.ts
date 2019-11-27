import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../entity/user';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {catchError, map} from "rxjs/operators";
import {Pageable} from "../entity/pageable";
import {Page} from "../entity/page";
import {Semester} from "../entity/semester";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'user';

  constructor(private http: HttpClient) {
  }

  /**
   * 登录
   * @param user 登录用户
   */
  login(user: User): Observable<User> {
    const url: string = this.baseUrl + '/login';
    return this.http.post<User>(url, user);
  }

  /**
   * 注册
   */
  register(user: User): Observable<User> {
    const url: string = this.baseUrl + '/register';
    return this.http.post<User>(url, user);
  }

  /**
   * 获取当前登录用户
   */
  getCurrentLoginUser(): Observable<User> {
    const url: string = this.baseUrl + '/currentLoginUser';
    return this.http.get<User>(url);
  }

  // 注销
  logout(): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/logout', null);
  }

  /**
   * 验证用户名是否重复验证器
   * @param name 用户
   * @returns AsyncValidatorFn 异步验证器
   */
  public getValidatorNameExistFn(name?: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value === name) {
        return of(null);
      } else {
        return this.existByCourseName(control.value).pipe(
          map(exist => (exist ? { exist: true, error: true } : {})),
          catchError(() => null)
        );
      }
    };
  }

  /**
   * 是否存在该用户名
   * @param name 用户名
   * @returns 查询结果true：存在，false：不存在
   */
  public existByCourseName(name: string): Observable<boolean> {
    const params = { username: name };
    return this.http.get<boolean>(`${this.baseUrl}/existByUserName`, {params: params});
  }

  /**
   * 根据名称查询分页信息
   * @param name
   * @param pageable
   */
  getUserPage(pageable: Pageable, name = ''): Observable<Page<User>> {
    let params = new HttpParams()
      .set('name', name)
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<User>>(this.baseUrl, {params: params});
  }
}
