import { Component, OnInit } from '@angular/core';
import {TeachPlan} from "../../../../../entity/teach-plan";
import {TeachPlanService} from "../../../../../service/teach-plan.service";
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../../../../../service/lesson.service";
import {NzMarks, NzMessageService} from "ng-zorro-antd";
import {Lesson} from "../../../../../entity/lesson";

@Component({
  selector: 'app-teach-plan-detail',
  templateUrl: './teach-plan-detail.component.html',
  styleUrls: ['./teach-plan-detail.component.css']
})
export class TeachPlanDetailComponent implements OnInit {
  teachPlan: TeachPlan;
  weightTip: NzMarks = {
    0: '了解',
    0.3: '普通',
    0.6: '重点',
    0.9: {
      style: {
        color: '#f50'
      },
      label: '<strong>重点&难点</strong>'
    }
  };

  constructor(private teachPlanService: TeachPlanService,
              private lessonService: LessonService,
              private message: NzMessageService,
              private route: ActivatedRoute) { }

  getTeachPlan() {
    this.route.params.subscribe(params => {
      this.teachPlanService.findById(params['id']).subscribe((teachPlan: TeachPlan) => {
        this.teachPlan = teachPlan;
      }, (error) => {
        console.log(error);
      });
    }, () => {
      console.log('error');
    });
  }

  /**
   * 当文本内容变化时触发
   * @param event
   * @param id
   */
  contentChange(event: string, id: number) {
    let lesson = new Lesson();
    lesson.content = event;
    this.lessonService.update(lesson, id).subscribe(() => {
      this.message.success("保存成功");
    }, () => {
      this.message.error("保存失败");
    });
  }

  /**
   * 重要程度改变后触发
   * @param event
   * @param id
   */
  weightChange(weight: number, id: number) {
    let lesson = new Lesson();
    lesson.weight = weight;
    this.lessonService.update(lesson, id).subscribe(() => {
      this.message.success("保存成功");
    }, () => {
      this.message.error("保存失败");
    });
  }

  ngOnInit() {
    this.getTeachPlan();
  }

}
