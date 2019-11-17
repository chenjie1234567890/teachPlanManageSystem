export class Course {
  public static readonly COURSE_TYPE_PRIMARY: number = 0; // 课程类型：普通课
  public static readonly COURSE_TYPE_PRACTICE: number = 1;  // 课程类型：实验课

  id: number;                // id
  name: string;             // 课程
  credit: number;           // 学分
  totalLessonHour: number;  // 总课时
  type: number;             // 课程类型
}
