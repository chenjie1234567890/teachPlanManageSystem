import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {EducatePlan} from "../../../../../entity/educate-plan";
import {Major} from "../../../../../entity/major";
import {MajorService} from "../../../../../service/major.service";
import {EducatePlanService} from "../../../../../service/educate-plan.service";

@Component({
  selector: 'app-teach-plan-view',
  templateUrl: './teach-plan-view.component.html',
  styleUrls: ['./teach-plan-view.component.css']
})
export class TeachPlanViewComponent implements OnInit {

  pageable = AppConfig.pageConfig;
  educatePlanPage: Page<EducatePlan> = new Page();
  majorId = 0;
  majorList: Major[];
  constructor(private majorService: MajorService,
              private educatePlanService: EducatePlanService) { }

  /**
   * 获取培养计划分页信息
   */
  getEducatePlanPage() {
    this.educatePlanService.getEducatePlanPage(this.pageable, this.majorId)
      .subscribe((data: Page<EducatePlan>) => {
        this.educatePlanPage = data;
      }, (res) => {
        console.log(res);
      });
  }

  /**
   * 获取专业列表
   */
  getMajorList() {
    this.majorService.getAll().subscribe((data: Major[]) => {
      this.majorList = data;
    }, () => {
      console.log('error');
    });
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number) {
    this.educatePlanService.deleteById(id)
      .subscribe(() => {
        for(let i = 0; i < this.educatePlanPage.content.length; i++) {
          if(this.educatePlanPage.content[i].id == id) {
            this.educatePlanPage.content.splice(i, 1);
            break;
          }}}, () => {
        console.log('error')
      });
  }

  ngOnInit() {
    this.getEducatePlanPage();
    this.getMajorList();
  }

}
