import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {Course} from "../../../../../entity/course";
import {CourseService} from "../../../../../service/course.service";


@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  pageable = AppConfig.pageConfig;
  coursePage: Page<Course> = new Page();
  courseName = "";
  constructor(private courseService: CourseService) { }

  getCoursePage() {
    this.courseService.getCoursePage(this.pageable, this.courseName)
      .subscribe((data: Page<Course>) => {
        this.coursePage = data;
      }, (res) => {
        console.log(res);
      });
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number) {
    this.courseService.deleteById(id)
      .subscribe(() => {
        for(let i = 0; i < this.coursePage.content.length; i++) {
          if(this.coursePage.content[i].id == id) {
            this.coursePage.content.splice(i, 1);
            break;
          }}}, () => {
        console.log('error')
      });
  }

  ngOnInit() {
    this.getCoursePage();
  }

}
