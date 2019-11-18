import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pageable} from "../entity/pageable";
import {Observable} from "rxjs";
import {Page} from "../entity/page";
import {EducatePlan} from "../entity/educate-plan";

@Injectable({
  providedIn: 'root'
})
export class EducatePlanService {
  baseUrl = 'educatePlan';
  constructor(private http: HttpClient) { }

  /**
   * 根据专业id查询分页信息
   * @param majorId
   * @param pageable
   */
  getEducatePlanPage(pageable: Pageable, majorId = 0): Observable<Page<EducatePlan>> {
    let params = new HttpParams()
      .set('majorId', majorId.toString())
      .set('page', (pageable.page - 1).toString())    // 前台分页是从1开始，而后台是从0开始，请求时减1
      .set('size', pageable.size.toString());
    return this.http.get<Page<EducatePlan>>(this.baseUrl, {params: params});
  }

  /**
   * 新增
   * @param educatePlan
   */
  add(educatePlan: EducatePlan): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/add', educatePlan);
  }

  /**
   * 更新
   * @param educatePlan
   * @param id
   */
  update(educatePlan: EducatePlan, id: number): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, educatePlan);
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
  findById(id: number): Observable<EducatePlan> {
    return this.http.get<EducatePlan>(this.baseUrl + '/' + id);
  }
}
