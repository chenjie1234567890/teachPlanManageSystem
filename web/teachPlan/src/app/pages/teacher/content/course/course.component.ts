import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../app.config";
import {Page} from "../../../../entity/page";
import {Course} from "../../../../entity/course";
import {CourseService} from "../../../../service/course.service";

@Component({
  selector: 'app-teacher-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseName = '';
  pageable = AppConfig.pageConfig;
  coursePage: Page<Course> = new Page();
  constructor(private courseService: CourseService) { }

  getCoursePage() {
    this.courseService.getCoursePage(this.pageable, this.courseName)
      .subscribe((data: Page<Course>) => {
        this.coursePage = data;
      }, (res) => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.getCoursePage();
  }

}
