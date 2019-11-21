import { Component, OnInit } from '@angular/core';
import {TeachPlan} from "../../../../../entity/teach-plan";
import {TeachPlanService} from "../../../../../service/teach-plan.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teach-plan-detail',
  templateUrl: './teach-plan-detail.component.html',
  styleUrls: ['./teach-plan-detail.component.css']
})
export class TeachPlanDetailComponent implements OnInit {
  teachPlan: TeachPlan;
  constructor(private teachPlanService: TeachPlanService,
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

  ngOnInit() {
    this.getTeachPlan();
  }

}
