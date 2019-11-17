import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../core.component.css']
})
export class FooterComponent implements OnInit {
  productName: string;
  teamname: string;
  onLineDate: Date;
  currentDate: Date;
  constructor() { }

  ngOnInit() {
    this.onLineDate = AppConfig.onLineDate;
    this.currentDate = AppConfig.currentDate;
    this.teamname = AppConfig.teamname;
    this.productName = AppConfig.productName;
  }

}
