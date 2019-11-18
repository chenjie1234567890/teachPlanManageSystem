import {Major} from './major';
import {Course} from './course';

export class EducatePlan {
  id: number;                // id
  termNumber: number;        // 学年，例如第一学年，第二学年
  major: Major;              // 所属专业
  courseList: Array<Course>; // 课程列表
}
