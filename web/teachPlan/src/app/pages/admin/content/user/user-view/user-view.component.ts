import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../entity/user';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {UserService} from "../../../../../service/user.service";


@Component({
  selector: 'app-user-index',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  userName = '';
  pageable = AppConfig.pageConfig;
  userPage: Page<User> = new Page();
  constructor(private userService: UserService) { }

  getUserPage() {
    this.userService.getUserPage(this.pageable, this.userName)
      .subscribe((data: Page<User>) => {
        this.userPage = data;
      }, (res) => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.getUserPage();
  }

}
