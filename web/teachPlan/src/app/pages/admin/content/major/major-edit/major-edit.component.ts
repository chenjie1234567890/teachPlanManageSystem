import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../../../entity/course";
import {MajorService} from "../../../../../service/major.service";
import {CourseService} from "../../../../../service/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Major} from "../../../../../entity/major";

@Component({
  selector: 'app-major-edit',
  templateUrl: './major-edit.component.html',
  styleUrls: ['./major-edit.component.css']
})
export class MajorEditComponent implements OnInit {

  editForm: FormGroup;
  courseOptions: Array<{ label: string; value: Course }> = [];
  constructor(private fb: FormBuilder,
              private majorService: MajorService,
              private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
  }
  // 新建表单
  createForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      courseList: [null]
    });
  }

  // 初始化表单
  initForm(major: Major) {
    this.editForm.setValue({
      name: major.name,
      courseList: major.courseList
    });
    console.log(this.editForm.get('courseList').value);
  }

  // 获取要编辑的专业
  getEditMajor() {
    this.route.params.subscribe(params => {
      this.majorService.findById(params['id']).subscribe((major: Major) => {
        this.initForm(major);
      }, (error) => {
        console.log(error);
      });
    }, () => {
      console.log('error');
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
    this.editForm.reset();
    for (const key in this.editForm.controls) {
      this.editForm.controls[key].markAsPristine();
      this.editForm.controls[key].updateValueAndValidity();
    }
  }

  // 提交表单
  submitForm() {
    this.majorService.add(this.editForm.value).subscribe(() => {
      this.router.navigateByUrl('admin/major');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initOptions();
    this.getEditMajor();
  }

}
