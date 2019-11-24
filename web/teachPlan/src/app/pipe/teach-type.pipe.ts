import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "../entity/course";

@Pipe({
  name: 'teachType'
})
export class TeachTypePipe implements PipeTransform {

  transform(examType: number): string {
    let result = '';
    switch (examType) {
      case Course.TEACH_TYPE_PRIMARY:
        result = '普通课';
        break;
      case Course.TEACH_TYPE_PRACTICE:
        result = '实验课';
        break;
    }
    return result;
  }

}
