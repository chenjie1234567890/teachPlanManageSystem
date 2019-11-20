import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../service/menu.service';
import {Menu} from '../../../entity/menu';
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../core.component.css']
})
export class SidebarComponent implements OnInit {
  menuList: Menu[];
  constructor(private menuService: MenuService,
              private userService: UserService) {
  }
  initMenuList() {
    this.userService.getCurrentLoginUser().subscribe((user: User) => {
      switch (user.role) {
        case User.ROLE_ADMIN: {
          this.menuList = this.menuService.adminMenu;
          break;
        }
        case User.ROLE_TEACHER: {
          this.menuList = this.menuService.teacherMenu;
          break;
        }
        case User.ROLE_STUDENT: {
          this.menuList = this.menuService.studentMenu
          break;
        }
      }
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initMenuList();
  }

}
