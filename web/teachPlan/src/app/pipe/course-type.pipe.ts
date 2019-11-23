import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "../entity/course";

@Pipe({
  name: 'courseType'
})
export class CourseTypePipe implements PipeTransform {

  transform(courseType: number): string {
    let result = '';
    switch (courseType) {
      case Course.COURSE_TYPE_BASE:
        result = '基础课';
        break;
      case Course.COURSE_TYPE_ELECTIVE:
        result = '选修课';
        break;
      case Course.COURSE_TYPE_MAJOR:
        result = '专业课';
        break;
    }
    return result;
  }

}
