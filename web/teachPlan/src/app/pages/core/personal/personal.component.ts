import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {pwConfirmValidator} from "../../setup/register/pwConfirm.validator";
import {User} from "../../../entity/user";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserService,
              private fb: FormBuilder,
              private message: NzMessageService) {
  }

  // 构造表单
  ceeateForm() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required], [this.userService.getValidatorNameExistFn()]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, pwConfirmValidator]],
    });
  }

  // 初始化表单
  initForm(user: User) {
    this.userForm.setValue({
      userName: user.userName,
      password: user.password,
      confirmPassword: user.password
    });
  }

  // 获取用户信息
  getUserInfo() {
    this.userService.getCurrentLoginUser().subscribe((user: User) => {
      this.initForm(user);
    }, () => {
      console.log('error');
    });
  }

  submitForm() {
    console.log(this.userForm.value);
    this.message.success("保存成功");
  }

  ngOnInit() {
    this.ceeateForm();
    this.getUserInfo();
  }

}
