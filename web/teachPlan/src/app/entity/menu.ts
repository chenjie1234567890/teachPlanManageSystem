/**
 * 菜单
 */
export class Menu {
  id: number;         // 菜单id
  name: string;       // 菜单名称
  iconType: string;   // 图标类型
  router: string;     // 路由
  _CHECKED: boolean;  // 是否选中，只用作前台使用，不传后台
  _SELECTED: boolean; // 用于路由选中
}
