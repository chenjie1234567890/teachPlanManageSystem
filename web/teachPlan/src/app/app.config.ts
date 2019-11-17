import {Pageable} from "./entity/pageable";

export const AppConfig = {
  productName: '教学计划管理系统',
  teamname: '河北工业大学SixGod团队',
  // 系统上线日期，注意month从0开始
  onLineDate: new Date(2019, 10, 9),
  // 当前日期
  currentDate: new Date(),

  // 分页配置
  pageConfig: new Pageable(1, 10),
};
