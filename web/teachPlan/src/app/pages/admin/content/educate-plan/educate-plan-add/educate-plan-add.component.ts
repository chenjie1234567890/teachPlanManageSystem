import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../../../entity/course";
import {MajorService} from "../../../../../service/major.service";
import {CourseService} from "../../../../../service/course.service";
import {Router} from "@angular/router";
import {Major} from "../../../../../entity/major";
import {EducatePlanService} from "../../../../../service/educate-plan.service";

@Component({
  selector: 'app-educate-plan-add',
  templateUrl: './educate-plan-add.component.html',
  styleUrls: ['./educate-plan-add.component.css']
})
export class EducatePlanAddComponent implements OnInit {

  addForm: FormGroup;
  courseOptions = Array<Course>();
  majorOptions = Array<Major>();
  constructor(private fb: FormBuilder,
              private majorService: MajorService,
              private courseService: CourseService,
              private educateService: EducatePlanService,
              private router: Router) { }

  // 初始化表单
  initForm() {
    this.addForm = this.fb.group({
      termNumber: [1, [Validators.required]],
      major: [null, [Validators.required]],
      courseList: [null, [Validators.required]]
    });
  }

  // 初始化专业选项
  initMajorOptions() {
    this.majorService.getAll().subscribe((majors: Major[]) => {
      this.majorOptions = majors;
    }, () => {
      console.log('error');
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

  // 专业选项改变
  majorChange(selectMajor: Major) {
    this.majorService.findById(selectMajor.id).subscribe((majorInfo: Major) => {
      this.courseOptions = majorInfo.courseList;
    }, () => {
      console.log('error');
    });
  }

  // 提交表单
  submitForm() {
    this.educateService.add(this.addForm.value).subscribe(() => {
      this.router.navigateByUrl('admin/educate-plan');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initForm();
    this.initMajorOptions();
  }

}
