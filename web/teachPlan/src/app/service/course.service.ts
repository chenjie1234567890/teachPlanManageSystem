import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../entity/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = 'course';
  constructor(private http: HttpClient) { }

  /**
   * 获取所由课程
   */
  getAllCourse(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(this.baseUrl + '/getAllCourse');
  }
}
