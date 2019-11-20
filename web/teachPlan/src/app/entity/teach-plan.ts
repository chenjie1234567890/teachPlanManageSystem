import {Lesson} from './lesson';
import {Semester} from './semester';
import {Course} from "./course";
import {Major} from "./major";

export class TeachPlan {
  id: number;                // id
  teacheType: number;        // 授课方式
  examType: number;          // 考核方式
  isPass: boolean;           // 是否通过审核
  lessonList: Array<Lesson>; // 课时列表
  major: Major;              // 对应专业
  course: Course;            // 对应课程
  semester: Semester;        // 所属学期
}
