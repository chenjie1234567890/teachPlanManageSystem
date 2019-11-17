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

  /**
   * 根据id删除
   * @param id
   */
  deleteById(id: number) {
    this.majorService.deleteById(id)
      .subscribe(() => {
        for(let i = 0; i < this.majorPage.content.length; i++) {
          if(this.majorPage.content[i].id == id) {
            this.majorPage.content.splice(i, 1);
            break;
          }}}, () => {
        console.log('error')
      });
  }

  ngOnInit() {
    this.getMajorPage();
  }
}
