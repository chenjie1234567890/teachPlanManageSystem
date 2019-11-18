import { Injectable } from '@angular/core';
import {Menu} from '../entity/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
 adminMenu: Menu[]  = [
   {  id: 1, name: '用户管理', iconType: 'user', router: '/admin/user', _CHECKED: false, _SELECTED: false},
   {  id: 2, name: '培养计划管理', iconType: 'edit', router: '/admin/educate-plan', _CHECKED: false, _SELECTED: false},
   {  id: 3, name: '学期管理', iconType: 'book', router: '/admin/semester', _CHECKED: false, _SELECTED: false},
   {  id: 4, name: '专业管理', iconType: 'phone', router: '/admin/major', _CHECKED: false, _SELECTED: false},
   {  id: 5, name: '课程管理', iconType: 'eye', router: '/admin/course', _CHECKED: false, _SELECTED: false},
 ];
  constructor() { }
}
