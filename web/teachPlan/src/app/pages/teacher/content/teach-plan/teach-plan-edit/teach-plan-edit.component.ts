import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Semester} from "../../../../../entity/semester";
import {Major} from "../../../../../entity/major";
import {Course} from "../../../../../entity/course";
import {Teacher} from "../../../../../entity/teacher";
import {TeacherService} from "../../../../../service/teacher.service";
import {TeachPlanService} from "../../../../../service/teach-plan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MajorService} from "../../../../../service/major.service";
import {SemesterService} from "../../../../../service/semester.service";
import {CourseService} from "../../../../../service/course.service";
import {TeachPlan} from "../../../../../entity/teach-plan";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-teach-plan-edit',
  templateUrl: './teach-plan-edit.component.html',
  styleUrls: ['./teach-plan-edit.component.css']
})
export class TeachPlanEditComponent implements OnInit {

  editForm: FormGroup;
  semesterOptions = Array<Semester>();
  majorOptions = Array<Major>();
  courseOptions = Array<Course>();
  loginTeacher: Teacher;
  editTeachPlanId: number;
  currentSemester: Semester;


  constructor(private fb: FormBuilder,
              private teacherService: TeacherService,
              private teachPlanService: TeachPlanService,
              private router: Router,
              private majorService: MajorService,
              private semesterService: SemesterService,
              private courseService: CourseService,
              private route: ActivatedRoute,
              private message: NzMessageService) {
    this.createForm();
  }

  // 构造表单
  createForm() {
    this.editForm = this.fb.group({
      semesterId: [null, [Validators.required]],
      courseId: [null, [Validators.required]],
      majorId: [null]
    });
  }

  // 初始化表单
  initForm(teachPlan: TeachPlan) {
    this.editForm.patchValue({
      semesterId: teachPlan.semester.id,
      courseId: teachPlan.course.id,
      majorId: teachPlan.major.id
    });
  }

  /**
   * 获取要编辑的教学计划
   */
  getEditTeachPan() {
    this.route.params.subscribe(params => {
      this.editTeachPlanId = params['id'];
      this.teachPlanService.findById(this.editTeachPlanId).subscribe((teachPlan: TeachPlan) => {
        this.initForm(teachPlan);
      }, (error) => {
        console.log(error);
      });
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
   * 获取当前学期
   */
  getCurrentSemester() {
    this.semesterService.getOpenSemester().subscribe((openSemester: Semester) => {
      this.currentSemester = openSemester;
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
        }, () => {
          console.log('error');
        });
    }
  }

  /**
   * 课程选项改变，影响待选专业
   * @param selectCourseId
   */
  courseChange(selectCourseId: number) {
    this.majorService
      .findAllByCourseId(selectCourseId)
      .subscribe((majors: Major[]) => {
        this.majorOptions = majors;
      }, () => {
        console.log('error');
      });
  }


  // 提交表单
  submitForm() {
    const teachPlan = new TeachPlan(
      new Major(this.editForm.get('majorId').value),
      new Course(this.editForm.get('courseId').value),
      new Semester(this.editForm.get('semesterId').value),
    );

    this.teachPlanService
      .update(teachPlan, this.editTeachPlanId)
      .subscribe(() => {
        this.message.success("保存成功");
      }, () => {
        this.message.error("保存失败");
      });

  }

  ngOnInit() {
    this.initSemesterOptions();
    this.getLoginTeacher();
    this.getEditTeachPan();
    this.getCurrentSemester();
  }
}
