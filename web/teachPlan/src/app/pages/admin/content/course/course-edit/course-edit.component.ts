import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../../../service/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Major} from "../../../../../entity/major";
import {Course} from "../../../../../entity/course";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  editForm: FormGroup;
  editCourseId: number;
  constructor(private fb: FormBuilder,
              private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) { }
  // 构造表单
  ceeateForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      credit: [null, [Validators.required]],
      totalLessonHour: [null, [Validators.required]],
      type: [null],
      teachType: [null],
      examType: [null],
    });
  }

  // 初始化表单
  initForm(course: Course) {
    this.editForm.setValue({
      name: course.name,
      credit: course.credit,
      totalLessonHour: course.totalLessonHour,
      type: course.type,
      teachType: course.teachType,
      examType: course.examType
    });
  }

  // 获取要编辑的课程
  getEdiCourse() {
    this.route.params.subscribe(params => {
      this.editCourseId = params['id'];
      this.courseService.findById(this.editCourseId).subscribe((course: Course) => {
        this.initForm(course);
      }, (error) => {
        console.log(error);
      });
    }, () => {
      console.log('error');
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
    this.courseService.update(this.editForm.value, this.editCourseId).subscribe(() => {
      this.router.navigateByUrl('admin/course');
    }, () => {
      console.log('error');
    });
  }
  ngOnInit() {
    this.ceeateForm();
    this.getEdiCourse();
  }

}
