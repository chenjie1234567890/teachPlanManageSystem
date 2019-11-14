import {Lesson} from './lesson';
import {Semester} from './semester';

export class TeachPlan {
  id: number;                // id
  teacheType: number;        // 授课方式
  examType: number;          // 考核方式
  isPass: boolean;           // 是否通过审核
  lessonList: Array<Lesson>; // 课时列表
  semester: Semester;        // 所属学期
}
