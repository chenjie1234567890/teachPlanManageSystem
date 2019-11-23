import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeacherService} from "../../../../../service/teacher.service";
import {TeachPlanService} from "../../../../../service/teach-plan.service";
import {Router} from "@angular/router";
import {Major} from "../../../../../entity/major";
import {MajorService} from "../../../../../service/major.service";
import {SemesterService} from "../../../../../service/semester.service";
import {Course} from "../../../../../entity/course";
import {CourseService} from "../../../../../service/course.service";
import {Semester} from "../../../../../entity/semester";
import {Teacher} from "../../../../../entity/teacher";
import {TeachPlan} from "../../../../../entity/teach-plan";

@Component({
  selector: 'app-teach-plan-add',
  templateUrl: './teach-plan-add.component.html',
  styleUrls: ['./teach-plan-add.component.css']
})
export class TeachPlanAddComponent implements OnInit {
  addForm: FormGroup;
  semesterOptions = Array<Semester>();
  majorOptions = Array<Major>();
  courseOptions = Array<Course>();
  loginTeacher: Teacher;

  constructor(private fb: FormBuilder,
              private teacherService: TeacherService,
              private teachPlanService: TeachPlanService,
              private router: Router,
              private majorService: MajorService,
              private semesterService: SemesterService,
              private courseService: CourseService) { }

  // 初始化表单
  initForm() {
    this.addForm = this.fb.group({
      semester: [null, [Validators.required]],
      course: [null, [Validators.required]],
      major: [null]
    });

    this.semesterService.getOpenSemester().subscribe((openSemester: Semester) => {
      this.addForm.patchValue({semester: openSemester.id});
      this.semesterChange(openSemester.id);
    }, () => {
      console.log('error');
    });
  }

  /**
   * 获取当前登录教师
   */
  getLoginTeacher() {
    this.teacherService.getCurrentLoginTeacher().subscribe((teacher: Teacher) => {
      this.loginTeacher = teacher;
    }, () => {
      console.log('error');
    });
  }

  /**
   * 初始化学期选项
   */
  initSemesterOptions() {
    this.semesterService.getAll().subscribe((semesters: Semester[]) => {
      this.semesterOptions = semesters;
    }, () => {
      console.log('error');
    });
  }

  /**
   *  学期选项改变，影响课程待选列表
   * @param selectSemesterId
   */
  semesterChange(selectSemesterId: number) {
    if (selectSemesterId && this.loginTeacher) {
      this.courseService.findBySemesterAndTeacher(selectSemesterId, this.loginTeacher.id)
        .subscribe((courses: Course[]) => {
          this.courseOptions = courses;
          this.addForm.patchValue({course: courses[0]});
        }, () => {
          console.log('error');
        });
    }
  }

  /**
   * 课程选项改变，影响待选专业
   * @param selectCourse
   */
  courseChange(selectCourse: Course) {
    this.majorService
      .findAllByCourseId(selectCourse.id)
      .subscribe((majors: Major[]) => {
        this.majorOptions = majors;
        if (majors.length > 0) {
          this.addForm.patchValue({major: majors[0]});
        }
      }, () => {
        console.log('error');
      });
  }


  // 提交表单
  submitForm() {
    const semester = new Semester();
    semester.id = this.addForm.get('semester').value;
    const teachPlan: TeachPlan = this.addForm.value;
    teachPlan.semester = semester;

    this.teachPlanService.add(teachPlan).subscribe(() => {
      this.router.navigateByUrl('teacher/teach-plan');
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

  ngOnInit() {
    this.initSemesterOptions();
    this.getLoginTeacher();
    this.initForm();
  }

}
