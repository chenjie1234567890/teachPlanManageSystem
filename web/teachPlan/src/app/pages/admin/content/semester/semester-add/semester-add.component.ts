import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../../../entity/course";
import {CourseService} from "../../../../../service/course.service";
import {Router} from "@angular/router";
import {SemesterService} from "../../../../../service/semester.service";
import {Semester} from "../../../../../entity/semester";
import {AppConfig} from "../../../../../app.config";

@Component({
  selector: 'app-semester-add',
  templateUrl: './semester-add.component.html',
  styleUrls: ['./semester-add.component.css']
})
export class SemesterAddComponent implements OnInit {
  dateFormat = AppConfig.dateFormat;
  addForm: FormGroup;
  courseOptions: Array<{ label: string; value: Course }> = [];
  constructor(private fb: FormBuilder,
              private semesterService: SemesterService,
              private courseService: CourseService,
              private router: Router) { }
  // 初始化表单
  initForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      timeRange: ['', [Validators.required]],
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
    const semester: Semester = {
      id: null,
      name: this.addForm.get('name').value,
      startTime: this.addForm.get('timeRange').value[0],
      endTime: this.addForm.get('timeRange').value[1],
      courseList: this.addForm.get('courseList').value
    };
    this.semesterService.add(semester).subscribe(() => {
      this.router.navigateByUrl('admin/semester');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initForm();
    this.initOptions();
  }

}
