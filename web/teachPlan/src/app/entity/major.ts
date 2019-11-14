import {Course} from './course';

export class Major {
  id: number;                 // id
  name: string;               // 专业名
  courseList: Array<Course>;  // 包含的课程列表
}
