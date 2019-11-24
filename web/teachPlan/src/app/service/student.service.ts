import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../entity/teacher";
import {Student} from "../entity/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'student';

  constructor(private http: HttpClient) { }

  /**
   * 获取当前登录学生
   */
  getCurrentLoginStudent():Observable<Student> {
    return this.http.get<Student>(this.baseUrl + '/getCurrentLoginStudent');
  }

  /**
   * 更新学生
   * @param id
   * @param student
   */
  update(id: number, student: Student):Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id,  student);
  }
}
