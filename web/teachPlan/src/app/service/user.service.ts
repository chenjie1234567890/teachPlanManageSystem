import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';
import {Menu} from '../entity/menu';
import {FormControl, ValidatorFn} from '@angular/forms';

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

  loginRoute(user: User): string {
    let url = '';
    switch (user.role) {
    case User.ROLE_STUDENT: {
        url =  'student';
        break;
      }
    case User.ROLE_TEACHER: {
        url = 'teacher';
        break;
      }
    case User.ROLE_ADMIN: {
        url = 'admin';
      }
    }
    return url;
  }
}
