import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Pageable} from "../entity/pageable";
import {Page} from "../entity/page";
import {Semester} from "../entity/semester";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  baseUrl = 'semester';
  constructor(private http: HttpClient) { }

  /**
   * 获取所有学期
   */
  getAll(): Observable<Array<Semester>> {
    return this.http.get<Array<Semester>>(this.baseUrl + '/getAll');
  }

  /**
   * 根据名称查询分页信息
   * @param name
   * @param pageable
   */
  getSemesterPage(pageable: Pageable, name = ''): Observable<Page<Semester>> {
    let params = new HttpParams()
      .set('name', name)
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<Semester>>(this.baseUrl, {params: params});
  }

  /**
   * 新增
   * @param semester
   */
  add(semester: Semester): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/add', semester);
  }

  /**
   * 更新
   * @param semester
   * @param id
   */
  update(semester: Semester, id: number): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, semester);
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }

  /**
   * 根据ID获取学期
   * @param id
   */
  findById(id: number): Observable<Semester> {
    return this.http.get<Semester>(this.baseUrl + '/' + id);
  }

  /**
   * 设置当前学期
   * @param id
   */
  setCurrentSemester(id: number): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/setCurrentSemester', id);
  }

  /**
   * 获取当前开放学期
   */
  getOpenSemester(): Observable<Semester> {
    return this.http.get<Semester>(this.baseUrl + '/getOpenSemester');
  }

  /**
   * 验证学期名是否重复验证器
   * @param name 学期
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
   * 是否存在该学期名
   * @param name 学期名
   * @returns 查询结果true：存在，false：不存在
   */
  public existByCourseName(name: string): Observable<boolean> {
    const params = { name: name };
    return this.http.get<boolean>(`${this.baseUrl}/existByName`, {params: params});
  }
}
