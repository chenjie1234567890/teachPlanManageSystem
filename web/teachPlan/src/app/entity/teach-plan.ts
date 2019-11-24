import {Lesson} from './lesson';
import {Semester} from './semester';
import {Course} from "./course";
import {Major} from "./major";
import {Teacher} from "./teacher";

export class TeachPlan {
  id: number;                // id
  isPass: boolean;           // 是否通过审核
  lessonList: Array<Lesson>; // 课时列表
  teacher: Teacher;          // 对应教师
  major: Major;              // 对应专业
  course: Course;            // 对应课程
  semester: Semester;        // 所属学期


  constructor(major?: Major, course?: Course, semester?: Semester) {
    this.major = major;
    this.course = course;
    this.semester = semester;
  }
}
