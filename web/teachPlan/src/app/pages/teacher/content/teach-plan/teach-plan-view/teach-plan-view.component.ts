import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {MajorService} from "../../../../../service/major.service";
import {TeachPlan} from "../../../../../entity/teach-plan";
import {TeachPlanService} from "../../../../../service/teach-plan.service";

@Component({
  selector: 'app-teach-plan-view',
  templateUrl: './teach-plan-view.component.html',
  styleUrls: ['./teach-plan-view.component.css']
})
export class TeachPlanViewComponent implements OnInit {

  pageable = AppConfig.pageConfig;
  teachPlanPage: Page<TeachPlan> = new Page();

  constructor(private majorService: MajorService,
              private teachPlanService: TeachPlanService) { }

  /**
   * 获取教学计划分页信息
   */
  getTeachPlanPage() {
    this.teachPlanService.getTeachPlanPage(this.pageable)
      .subscribe((data: Page<TeachPlan>) => {
        this.teachPlanPage = data;
      }, (res) => {
        console.log(res);
      });
  }

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number) {
    this.teachPlanService.deleteById(id)
      .subscribe(() => {
        for(let i = 0; i < this.teachPlanPage.content.length; i++) {
          if(this.teachPlanPage.content[i].id == id) {
            this.teachPlanPage.content.splice(i, 1);
            break;
          }}}, () => {
        console.log('error')
      });
  }

  ngOnInit() {
    this.getTeachPlanPage();
  }

}
