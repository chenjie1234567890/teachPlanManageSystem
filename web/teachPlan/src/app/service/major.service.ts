import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pageable} from "../entity/pageable";
import {Page} from "../entity/page";
import {Major} from "../entity/major";
import {Observable} from "rxjs";

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
}
