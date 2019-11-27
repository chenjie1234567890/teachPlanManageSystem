import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pageable} from "../entity/pageable";
import {Page} from "../entity/page";
import {Major} from "../entity/major";
import {Observable, of} from "rxjs";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MajorService {
  baseUrl: string = "major";
  constructor(private http: HttpClient) { }

  /**
   * 根据名称查询分页信息
   * @param name
   * @param pageable
   */
  getMajorPage(pageable: Pageable, name = ''): Observable<Page<Major>> {
    let params = new HttpParams()
      .set('name', name)
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<Major>>(this.baseUrl, {params: params});
  }

  /**
   * 新增
   * @param major
   */
  add(major: Major): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/add', major);
  }

  /**
   * 更新
   * @param major
   * @param id
   */
  update(major: Major, id: number): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, major);
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }

  /**
   * 根据id获取专业
   * @param id
   */
  findById(id: number): Observable<Major> {
    return this.http.get<Major>(this.baseUrl + '/' + id);
  }

  /**
   * 获取所有专业
   */
  getAll(): Observable<Major[]> {
    return this.http.get<Major[]>(this.baseUrl + '/getAllMajor');
  }

  /**
   * 获取所有包含courseId的专业
   * @param courseId
   */
  findAllByCourseId(courseId: number): Observable<Major[]> {
    const params = { courseId: courseId.toString() };
    return this.http.get<Major[]>(this.baseUrl + '/findAllByCourseId', {params: params});
  }

  /**
   * 验证专业名是否重复验证器
   * @param name 专业
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
   * 是否存在该专业名
   * @param name 专业名
   * @returns 查询结果true：存在，false：不存在
   */
  public existByCourseName(name: string): Observable<boolean> {
    const params = { name: name };
    return this.http.get<boolean>(`${this.baseUrl}/existByName`, {params: params});
  }
}
