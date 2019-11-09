import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
    this.initForm();
  }

  submitForm(): void {
    this.userService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('admin');
    }, () => {
      console.log('error');
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
