import { Injectable } from '@angular/core';
import {Menu} from '../entity/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 adminMenu: Menu[]  = [
   {  id: 1, name: '用户管理', iconType: 'user', router: '/admin/user', _CHECKED: false, _SELECTED: false},
   {  id: 5, name: '课程管理', iconType: 'eye', router: '/admin/course', _CHECKED: false, _SELECTED: false},
   {  id: 4, name: '专业管理', iconType: 'phone', router: '/admin/major', _CHECKED: false, _SELECTED: false},
   {  id: 3, name: '学期管理', iconType: 'book', router: '/admin/semester', _CHECKED: false, _SELECTED: false},
   {  id: 2, name: '培养计划管理', iconType: 'edit', router: '/admin/educate-plan', _CHECKED: false, _SELECTED: false},
 ];

  teacherMenu: Menu[]  = [
    {  id: 1, name: '教学计划', iconType: 'book', router: '/teacher/teach-plan', _CHECKED: false, _SELECTED: false},
    {  id: 2, name: '课程信息', iconType: 'phone', router: '/teacher/course', _CHECKED: false, _SELECTED: false},
  ];

  studentMenu: Menu[]  = [
    {  id: 1, name: '培养计划', iconType: 'book', router: '/student/educate', _CHECKED: false, _SELECTED: false},
    {  id: 2, name: '课程信息', iconType: 'phone', router: '/student/course', _CHECKED: false, _SELECTED: false},
  ];
  constructor() { }
}
