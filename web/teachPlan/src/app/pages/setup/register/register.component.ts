import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import {pwConfirmValidator} from './pwConfirm.validator';
import {User} from '../../../entity/user';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }
  // 提交表单
  submitForm(): void {
    const user: User = this.registerForm.value;
    this.userService.register(user).subscribe(() => {
      this.router.navigateByUrl('setup');
    }, () => {
      console.log('error');
    });
  }


  /**
   * 初始化表单
   */
  initForm() {
    this.registerForm = this.fb.group({
      userName: [null, [Validators.required], [this.userService.getValidatorNameExistFn()]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, pwConfirmValidator]],
      role: [null, [Validators.required]]
    });
  }

  back() {
    this.router.navigateByUrl('setup');
  }


  ngOnInit(): void {
    this.initForm();
  }
}
