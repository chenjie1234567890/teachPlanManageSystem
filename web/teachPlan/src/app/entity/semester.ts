import {Course} from "./course";

export class Semester {
  id: number;       // id
  name: string;     // 学期名
  startTime: Date;  // 开始时间
  endTime: Date;    // 结束时间
  currentSemester: boolean; // 是否当前学期
  courseList: Array<Course>; // 开设的课程


  constructor(id?: number) {
    this.id = id;
  }
}
