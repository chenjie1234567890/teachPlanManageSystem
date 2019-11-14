import {User} from './user';
import {TeachPlan} from './teach-plan';
import {Course} from './course';

export class Teacher {
  id: number;     // id
  staffNumber: number;  // 工号
  user: User;           // 教师对应的用户
  teachPlanList: Array<TeachPlan>;  // 教学计划列表
  courseList: Array<Course>;      // 教师教授的课程列表
}
