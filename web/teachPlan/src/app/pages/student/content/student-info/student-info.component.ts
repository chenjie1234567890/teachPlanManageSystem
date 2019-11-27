import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Major} from "../../../../entity/major";
import {MajorService} from "../../../../service/major.service";
import {NzMessageService} from "ng-zorro-antd";
import {StudentService} from "../../../../service/student.service";
import {Student} from "../../../../entity/student";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  editForm: FormGroup;
  majorList: Major[];
  loginStudentId: number;

  constructor(private studentService: StudentService,
              private majorService: MajorService,
              private fb: FormBuilder,
              private message: NzMessageService) {
    this.createForm();
  }

  // 构造表单
  createForm() {
    this.editForm = this.fb.group({
      studentNum: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      majorId: [null, []]
    });
  }

  // 初始化表单
  initForm(student: Student) {
    if (student.major && student.studentNum) {
      this.editForm.setValue({
        studentNum: student.studentNum,
        majorId: student.major.id
      });
    }
  }

  getMajorList() {
    this.majorService.getAll().subscribe((majors: Major[]) => {
      this.majorList = majors;
    }, () => {
      console.log('error');
    });
  }

  getStudent() {
    this.studentService.getCurrentLoginStudent().subscribe((student: Student) => {
      this.loginStudentId = student.id;
      this.initForm(student);
    }, () => {
      console.log('error');
    });
  }

  submitForm() {
    // 构造更新的学生
    let student = new Student(
      this.editForm.get('studentNum').value,
      new Major(this.editForm.get('majorId').value)
    );

    // 发起申请
    this.studentService .update(this.loginStudentId, student).subscribe(() => {
      this.message.success("保存成功");
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.getMajorList();
    this.getStudent();
  }

}
