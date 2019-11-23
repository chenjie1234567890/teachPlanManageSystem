import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pageable} from "../entity/pageable";
import {Observable} from "rxjs";
import {Page} from "../entity/page";
import {TeachPlan} from "../entity/teach-plan";

@Injectable({
  providedIn: 'root'
})
export class TeachPlanService {
  baseUrl = 'teachplan';
  constructor(private http: HttpClient) { }

  /**
   * 获取当前登录教师的教学计划分页信息
   * @param pageable
   */
  getTeachPlanPage(pageable: Pageable): Observable<Page<TeachPlan>> {
    let params = new HttpParams()
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<TeachPlan>>(this.baseUrl, {params: params});
  }

  /**
   * 新增
   * @param teachPlan
   */
  add(teachPlan: TeachPlan): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/add', teachPlan);
  }

  /**
   * 更新
   * @param teachPlan
   * @param id
   */
  update(teachPlan: TeachPlan, id: number): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, teachPlan);
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }

  /**
   * 根据id获取培养计划
   * @param id
   */
  findById(id: number): Observable<TeachPlan> {
    return this.http.get<TeachPlan>(this.baseUrl + '/' + id);
  }
}
