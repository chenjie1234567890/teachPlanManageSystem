import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "../entity/lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  baseUrl = 'lesson';
  constructor(private http: HttpClient) { }

  // 更新课时
  update(lesson: Lesson, id: number):Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id, lesson);
  }
}
