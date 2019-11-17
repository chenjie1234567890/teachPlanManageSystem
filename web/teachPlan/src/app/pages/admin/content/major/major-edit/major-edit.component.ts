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
  courseOptions: Array<{ label: string; value: number }> = [];
  editMajorId: number;
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
      courseIds: [null]
    });
  }

  // 初始化表单
  initForm(major: Major) {
    this.editForm.patchValue({
      name: major.name,
      courseIds: this.getIds(major)
    });
  }

  // 获取专业所属的课程id数组
  getIds(major: Major) {
    let ids = [];
    for(let course of major.courseList) {
      ids.push(course.id);
    }
    return ids;
  }

  // 获取要编辑的专业
  getEditMajor() {
    this.route.params.subscribe(params => {
      this.editMajorId = params['id'];
      this.majorService.findById(this.editMajorId).subscribe((major: Major) => {
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
    // 构造更新的专业
    let major = new Major();
    major.name = this.editForm.get('name').value;
    let courses = [];
    for (let id of this.editForm.get('courseIds').value) {
      courses.push({id: id, type: null, totalLessonHour: null, credit: null, name: null});
    }
    major.courseList = courses;
    // 发起请求
    this.majorService.update(major, this.editMajorId).subscribe(() => {
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
