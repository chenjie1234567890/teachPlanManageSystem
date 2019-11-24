import {Course} from './course';

export class Lesson {
  public static readonly LESSON_WEIGHT_KONW = 0;      // 了解
  public static readonly LESSON_WEIGHT_PRIMARY = 0.3; // 普通
  public static readonly LESSON_WEIGHT_HARD = 0.6;    // 重点
  public static readonly LESSON_WEIGHT_REALHARD = 0.9; // 重点&难点

  id: number;           // id
  lessonHour: number;   // 课时次序
  content: string;      // 内容
  weight: number;       // 重要性
  course: Course;       // 对应的课程
}
