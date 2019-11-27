import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {User} from '../../../entity/user';
import {TeacherService} from "../../../service/teacher.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private teacherService: TeacherService) {
    this.initForm();
  }

  submitForm(): void {
    this.userService.login(this.loginForm.value).subscribe((user: User) => {
        this.router.navigateByUrl(this.loginRoute(user));
    }, () => {
      console.log('login error');
    });
  }

  loginRoute(user: User): string {
    let url = '';
    switch (user.role) {
      case User.ROLE_STUDENT: {
        url =  'student';
        break;
      }
      case User.ROLE_TEACHER: {
        url = 'teacher';
        break;
      }
      case User.ROLE_ADMIN: {
        url = 'admin';
      }
    }
    return url;
  }


  /**
   * 初始化表单
   */
  initForm() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.initForm();
  }

}
