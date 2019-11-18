import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../../../entity/course";
import {Major} from "../../../../../entity/major";
import {MajorService} from "../../../../../service/major.service";
import {CourseService} from "../../../../../service/course.service";
import {EducatePlanService} from "../../../../../service/educate-plan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EducatePlan} from "../../../../../entity/educate-plan";

@Component({
  selector: 'app-educate-plan-edit',
  templateUrl: './educate-plan-edit.component.html',
  styleUrls: ['./educate-plan-edit.component.css']
})
export class EducatePlanEditComponent implements OnInit {

  editForm: FormGroup;
  editEducatePlanId: number;
  courseOptions: Array<{ label: string; value: number }> = [];
  majorOptions: Array<{ label: string; value: number }> = [];
  constructor(private fb: FormBuilder,
              private majorService: MajorService,
              private courseService: CourseService,
              private educatePlanService: EducatePlanService,
              private router: Router,
              private route: ActivatedRoute) { }
  // 构造表单
  createForm() {
    this.editForm = this.fb.group({
      termNumber: [null, [Validators.required]],
      majorId: [null, [Validators.required]],
      courseIds: [null, []]
    });
  }

  // 初始化表单
  initForm(educatePlan: EducatePlan) {
    this.editForm.setValue({
      termNumber: educatePlan.termNumber,
      majorId: educatePlan.major.id,
      courseIds: this.getIds(educatePlan)
    });
  }

  getIds(educatePlan: EducatePlan) {
    let ids = [];
    for(let course of educatePlan.courseList) {
      ids.push(course.id);
    }
    return ids;
  }

  // 获取要编辑的培养计划
  getEditMajor() {
    this.route.params.subscribe(params => {
      this.editEducatePlanId = params['id'];
      this.educatePlanService.findById(this.editEducatePlanId).subscribe((educatePlan: EducatePlan) => {
        this.initForm(educatePlan);
      }, (error) => {
        console.log(error);
      });
    }, () => {
      console.log('error');
    });
  }

  // 初始化专业选项
  initMajorOptions() {
    this.majorService.getAll().subscribe((majorList: Major[]) => {
      const children: Array<{ label: string; value: number }> = [];
      for (let major of majorList) {
        children.push({ label: major.name, value: major.id });
      }
      this.majorOptions = children;
    }, () => {
      console.log('error');
    });
  }

  // 初始化课程选项
  initCourseOptions() {
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
    // 构造更新的培养计划
    let educatePlan = new EducatePlan();
    educatePlan.termNumber = this.editForm.get('termNumber').value;
    let courses = [];
    for (let id of this.editForm.get('courseIds').value) {
      courses.push({id: id, type: null, totalLessonHour: null, credit: null, name: null});
    }
    educatePlan.courseList = courses;
    educatePlan.major = {id: this.editForm.get('majorId').value, name: null, courseList: null};
    this.educatePlanService.update(educatePlan, this.editEducatePlanId).subscribe(() => {
      this.router.navigateByUrl('admin/educate-plan');
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.initCourseOptions();
    this.initMajorOptions();
    this.createForm();
    this.getEditMajor();
  }

}
