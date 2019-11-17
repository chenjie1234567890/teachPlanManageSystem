import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../../../entity/course";
import {SemesterService} from "../../../../../service/semester.service";
import {CourseService} from "../../../../../service/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Semester} from "../../../../../entity/semester";

@Component({
  selector: 'app-semester-edit',
  templateUrl: './semester-edit.component.html',
  styleUrls: ['./semester-edit.component.css']
})
export class SemesterEditComponent implements OnInit {
  dateFormat = AppConfig.dateFormat;
  editForm: FormGroup;
  editSemesterId: number;
  courseOptions: Array<{ label: string; value: number }> = [];
  constructor(private fb: FormBuilder,
              private semesterService: SemesterService,
              private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
  }

  // 构造表单
  createForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      timeRange: ['', [Validators.required]],
      courseIds: [null, []]
    });
  }

  // 初始化表单
  initForm(semester: Semester) {
    this.editForm.setValue({
      name: semester.name,
      timeRange: [semester.startTime, semester.endTime],
      courseIds: this.getIds(semester)
    });
  }

  // 获取专业所属的课程id数组
  getIds(semester: Semester) {
    let ids = [];
    for(let course of semester.courseList) {
      ids.push(course.id);
    }
    console.log(ids);
    return ids;
  }

  // 获取要编辑的学期
  getEditSemester() {
    this.route.params.subscribe(params => {
      this.editSemesterId = params['id'];
      this.semesterService.findById(this.editSemesterId).subscribe((semester: Semester) => {
        this.initForm(semester);
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
      const children: Array<{ label: string; value: number }> = [];
      for (let course of courseList) {
        children.push({ label: course.name, value: course.id });
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
    // 构造更新的学期开设的课程列表
    let courses = [];
    for (let id of this.editForm.get('courseIds').value) {
      courses.push({id: id, type: null, totalLessonHour: null, credit: null, name: null});
    }
    // 构造学期
    const semester: Semester = {
      id: null,
      name: this.editForm.get('name').value,
      startTime: this.editForm.get('timeRange').value[0],
      endTime: this.editForm.get('timeRange').value[1],
      courseList: courses
    };

    // 发起请求
    this.semesterService.update(semester, this.editSemesterId).subscribe(() => {
      this.router.navigateByUrl('admin/semester');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.getEditSemester();
    this.initOptions();
  }
}
