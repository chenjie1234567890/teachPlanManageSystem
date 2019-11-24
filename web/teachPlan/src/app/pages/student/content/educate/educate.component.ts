import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../../service/student.service";
import {EducatePlanService} from "../../../../service/educate-plan.service";
import {EducatePlan} from "../../../../entity/educate-plan";
import {Student} from "../../../../entity/student";
import {AppConfig} from "../../../../app.config";
import {Page} from "../../../../entity/page";

@Component({
  selector: 'app-educate',
  templateUrl: './educate.component.html',
  styleUrls: ['./educate.component.css']
})
export class EducateComponent implements OnInit {
  pageable = AppConfig.pageConfig;
  educatePlanPage: Page<EducatePlan> = new Page();
  loginStudent = new Student();
  constructor(private studentService: StudentService,
              private educatePlanService: EducatePlanService) { }


  initEducatePlanList() {
    // 获取当前登录学生的专业
    this.studentService
      .getCurrentLoginStudent()
      .subscribe((loginStudent: Student) => {
        // 获取当前登录学生培养计划
        if (loginStudent.major) {
          this.loginStudent = loginStudent;
          this.educatePlanService
            .getEducatePlanPage(this.pageable, this.loginStudent.major.id)
            .subscribe((educatePlan: Page<EducatePlan>) => {
              this.educatePlanPage = educatePlan;
          }, () => {
            console.log('error');
          });
        }
    }, () => {

    });
  }

  ngOnInit() {
    this.initEducatePlanList();
  }

}
