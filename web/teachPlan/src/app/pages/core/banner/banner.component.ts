import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

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
