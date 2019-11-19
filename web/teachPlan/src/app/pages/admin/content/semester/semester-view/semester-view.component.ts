import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {SemesterService} from "../../../../../service/semester.service";
import {Semester} from "../../../../../entity/semester";

@Component({
  selector: 'app-semester-view',
  templateUrl: './semester-view.component.html',
  styleUrls: ['./semester-view.component.css']
})
export class SemesterViewComponent implements OnInit {

  pageable = AppConfig.pageConfig;
  semesterPage: Page<Semester> = new Page();
  semesterName = "";
  constructor(private semesterService: SemesterService) { }

  getSemesterPage() {
    this.semesterService.getSemesterPage(this.pageable, this.semesterName)
      .subscribe((data: Page<Semester>) => {
        this.semesterPage = data;
      }, (res) => {
        console.log(res);
      });
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number) {
    this.semesterService.deleteById(id)
      .subscribe(() => {
        for(let i = 0; i < this.semesterPage.content.length; i++) {
          if(this.semesterPage.content[i].id == id) {
            this.semesterPage.content.splice(i, 1);
            break;
          }}}, () => {
        console.log('error')
      });
  }

  /**
   * 设置当前学期
   */
  setCurrentSemester(editSemester: Semester) {
    for (let semester of this.semesterPage.content) {
      if (semester.id == editSemester.id) {
        editSemester.currentSemester = !editSemester.currentSemester;
      } else {
        semester.currentSemester = false;
      }
    }
    this.semesterService.setCurrentSemester(editSemester.id).subscribe(() => {
    }, () => {
      console.log('error');
    });
  }

  ngOnInit() {
    this.getSemesterPage();
  }
}
