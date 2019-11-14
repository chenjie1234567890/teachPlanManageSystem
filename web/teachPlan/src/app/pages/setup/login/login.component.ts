import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../entity/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
    this.initForm();
  }

  submitForm(): void {
    this.userService.login(this.loginForm.value).subscribe((user: User) => {
        this.router.navigateByUrl(this.userService.loginRoute(user));
    }, () => {
      console.log('login error');
    });
  }


  /**
   * 初始化表单
   */
  initForm() {
    this.loginForm = this.fb.group({
      userName: [null],
      password: [null]
    });
  }


  ngOnInit(): void {
    this.initForm();
  }

}
