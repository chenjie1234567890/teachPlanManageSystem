import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../entity/user';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userList: ({ id: number; userName: string; password: string; role: number })[];
  constructor() { }

  getAllByPage() {
   console.log('page change');
  }

  ngOnInit() {
    this.userList = [
      {id: 4, userName: '赵六', password: '123', role: User.ROLE_STUDENT},
      {id: 1, userName: '张三', password: '123', role: User.ROLE_ADMIN},
      {id: 2, userName: '李四', password: '123', role: User.ROLE_STUDENT},
      {id: 3, userName: '王五', password: '123', role: User.ROLE_TEACHER},
    ];
  }

}
