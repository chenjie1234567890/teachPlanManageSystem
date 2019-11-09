import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../service/menu.service';
import {Menu} from '../../../entity/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../core.component.css']
})
export class SidebarComponent implements OnInit {
  menuList: Menu[];
  constructor(private menuService: MenuService) {
    this.menuList = menuService.adminMenu;
  }
  ngOnInit() {
  }

}
