import { Injectable } from '@angular/core';
import {Teacher} from "../entity/teacher";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl = 'teacher';

  constructor(private http: HttpClient) { }

  getCurrentLoginTeacher():Observable<Teacher> {
    return this.http.get<Teacher>(this.baseUrl + '/getCurrentLoginTeacher');
  }

  update(id: number, teacher: Teacher):Observable<void> {
    return this.http.put<void>(this.baseUrl + '/' + id,  teacher);
  }
}
