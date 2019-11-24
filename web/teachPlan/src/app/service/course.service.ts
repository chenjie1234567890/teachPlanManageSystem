import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../entity/course";
import {Pageable} from "../entity/pageable";
import {Page} from "../entity/page";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = 'course';
  constructor(private http: HttpClient) { }

  /**
   * 获取所有课程
   */
  getAllCourse(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(this.baseUrl + '/getAllCourse');
  }

  /**
   * 根据名称查询分页信息
   * @param name
   * @param pageable
   */
  getCoursePage(pageable: Pageable, name = ''): Observable<Page<Course>> {
    let params = new HttpParams()
      .set('name', name)
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<Course>>(this.baseUrl, {params: params});
  }

  /**
   * 新增
   * @param course
   */
  add(course: Course): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/add', course);
  }

  /**
   * 更新
   * @param course
   * @param id
   */
  update(course: Course, id: number): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, course);
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }

  /**
   * 根据id获取课程
   * @param id
   */
  findById(id: number): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + '/' + id);
  }

  /**
   * 获取学期开设课程和教师教授课程的交集
   * @param semesterId
   * @param teacherId
   */
  findBySemesterAndTeacher(semesterId: number, teacherId: number): Observable<Course[]> {
    const params = {
      semesterId: semesterId.toString(),
      teacherId: teacherId.toString()
    };
    return this.http.get<Course[]>(this.baseUrl + '/findBySemesterAndTeacher', {params: params})
  }
}
