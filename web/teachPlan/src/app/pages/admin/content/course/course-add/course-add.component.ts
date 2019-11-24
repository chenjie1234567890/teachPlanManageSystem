import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../../../service/course.service";
import {Router} from "@angular/router";
import {Course} from "../../../../../entity/course";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder,
              private courseService: CourseService,
              private router: Router) { }
  // 初始化表单
  initForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      credit: [null, [Validators.required]],
      totalLessonHour: [null, [Validators.required]],
      type: [Course.COURSE_TYPE_BASE],
      teachType: [Course.TEACH_TYPE_PRIMARY],
      examType: [Course.EXAM_TYPE_CLOSE_BOOK],
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
    this.courseService.add(this.addForm.value).subscribe(() => {
      this.router.navigateByUrl('admin/course');
    }, () => {
      console.log('error');
    });
  }
  ngOnInit() {
    this.initForm();
  }

}
