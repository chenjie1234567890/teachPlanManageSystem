import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../entity/user";

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {


  transform(value: number): string {
    switch (value) {
      case User.ROLE_ADMIN:
        return '管理员';
      case User.ROLE_TEACHER:
        return '教师';
      default:
        return '学生';
    }
  }

}
