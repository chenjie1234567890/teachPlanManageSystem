import {Course} from './course';

export class Lesson {
  id: number;           // id
  lessonHour: number;   // 课时次序
  content: string;      // 内容
  weight: number;       // 重要性
  course: Course;       // 对应的课程
}
