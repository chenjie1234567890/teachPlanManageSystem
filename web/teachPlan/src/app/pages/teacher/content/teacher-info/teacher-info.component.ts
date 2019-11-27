import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../../service/teacher.service";
import {Course} from "../../../../entity/course";
import {CourseService} from "../../../../service/course.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Teacher} from "../../../../entity/teacher";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  editForm: FormGroup;
  courseList: Course[];
  loginTeacherId: number;

  constructor(private teacherService: TeacherService,
              private courseService: CourseService,
              private fb: FormBuilder,
              private message: NzMessageService) {
    this.createForm();
  }

  // 构造表单
  createForm() {
    this.editForm = this.fb.group({
      staffNumber: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      courseIds: [null, []]
    });
  }

  // 初始化表单
  initForm(teacher: Teacher) {
    this.editForm.setValue({
      staffNumber: teacher.staffNumber,
      courseIds: this.getIds(teacher)
    });
  }

  getIds(teacher: Teacher) {
    let ids = [];
    for (let course of teacher.courseList) {
      ids.push(course.id);
    }
    return ids;
  }

  getCourseList() {
    this.courseService.getAllCourse().subscribe((courses: Course[]) => {
      this.courseList = courses;
    }, () => {
      console.log('error');
    });
  }

  getTeacher() {
    this.teacherService.getCurrentLoginTeacher().subscribe((teacher: Teacher) => {
      this.loginTeacherId = teacher.id;
      this.initForm(teacher);
    }, () => {
      console.log('error');
    });
  }

  submitForm() {
    // 构造更新的教师
    let teacher = new Teacher();
    teacher.staffNumber = this.editForm.get('staffNumber').value;
    let courses = [];
    for (let id of this.editForm.get('courseIds').value) {
      courses.push({id: id, type: null, totalLessonHour: null, credit: null, name: null});
    }
    teacher.courseList = courses;

    // 发起申请
    this.teacherService .update(this.loginTeacherId, teacher).subscribe(() => {
      this.message.success("保存成功");
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.getCourseList();
    this.getTeacher();
  }

}
