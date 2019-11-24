import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';

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
}
