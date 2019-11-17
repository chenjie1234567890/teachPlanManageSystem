import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MajorService} from "../../../../../service/major.service";
import {CourseService} from "../../../../../service/course.service";
import {Course} from "../../../../../entity/course";
import {Router} from "@angular/router";

@Component({
  selector: 'app-major-add',
  templateUrl: './major-add.component.html',
  styleUrls: ['./major-add.component.css']
})
export class MajorAddComponent implements OnInit {
  addForm: FormGroup;
  courseOptions: Array<{ label: string; value: Course }> = [];
  constructor(private fb: FormBuilder,
              private majorService: MajorService,
              private courseService: CourseService,
              private router: Router) { }
  // 初始化表单
  initForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      courseList: [null, []]
    });
  }

  // 初始化课程选项
  initOptions() {
    this.courseService.getAllCourse().subscribe((courseList: Course[]) => {
      const children: Array<{ label: string; value: Course }> = [];
      for (let course of courseList) {
        children.push({ label: course.name, value: course });
      }
      this.courseOptions = children;
    }, () => {
      console.log('error')
    });
  }

  // 重置输入
  resetForm() {
    this.addForm.reset();
    for (const key in this.addForm.controls) {
      this.addForm.controls[key].markAsPristine();
      this.addForm.controls[key].updateValueAndValidity();
    }
  }

  // 提交表单
  submitForm() {
    this.majorService.add(this.addForm.value).subscribe(() => {
      this.router.navigateByUrl('admin/major');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initForm();
    this.initOptions();
  }

}
