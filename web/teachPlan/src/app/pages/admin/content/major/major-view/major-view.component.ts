import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../../../../../app.config";
import {Page} from "../../../../../entity/page";
import {Major} from "../../../../../entity/major";
import {MajorService} from "../../../../../service/major.service";

@Component({
  selector: 'app-major-view',
  templateUrl: './major-view.component.html',
  styleUrls: ['./major-view.component.css']
})
export class MajorViewComponent implements OnInit {
  pageable = AppConfig.pageConfig;
  majorPage: Page<Major> = new Page();
  majorName = "";
  constructor(private majorService: MajorService) { }

  getMajorPage() {
    this.majorService.getMajorPage(this.pageable, this.majorName)
      .subscribe((data: Page<Major>) => {
        this.majorPage = data;
      }, (res) => {
        console.log(res);
      });
  }
  deleteById(id: number) {
    this.majorService.deleteById(id)
      .subscribe(() => {
        console.log('sucess');
      }, () => {
        console.log('error')
      });
  }

  ngOnInit() {
    this.getMajorPage();
  }
}
