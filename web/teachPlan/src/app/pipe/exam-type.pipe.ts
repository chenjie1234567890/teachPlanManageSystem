import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "../entity/course";

@Pipe({
  name: 'examType'
})
export class ExamTypePipe implements PipeTransform {

  transform(examType: number): string {
    let result = '';
    switch (examType) {
      case Course.EXAM_TYPE_OPEN_BOOK:
        result = '开卷考试';
        break;
      case Course.EXAM_TYPE_CLOSE_BOOK:
        result = '闭卷考试';
        break;
    }
    return result;
  }

}
