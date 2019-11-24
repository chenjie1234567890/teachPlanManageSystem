import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {TeacherService} from "../../../service/teacher.service";
import {User} from "../../../entity/user";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  personalUrl = '';
  constructor(private userService: UserService,
              private router: Router,
              private teacherService: TeacherService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigateByUrl('/setup/login');
    }, () => {
      console.log('error');
    });
  }
}
