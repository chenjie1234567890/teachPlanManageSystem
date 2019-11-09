import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';
import {Menu} from '../entity/menu';

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
  login(user: User): Observable<void> {
    const url: string = this.baseUrl + '/login';
    return this.http.post<void>(url, user);
  }
}
