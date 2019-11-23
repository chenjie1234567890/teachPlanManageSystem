import {Major} from "./major";

export class Course {
  public static readonly COURSE_TYPE_BASE = 0;      // 课程类型：基础课
  public static readonly COURSE_TYPE_ELECTIVE = 1;  // 课程类型：选修课
  public static readonly COURSE_TYPE_MAJOR = 2;     // 课程类型：专业课

  public static readonly TEACH_TYPE_PRIMARY = 0;    // 授课方式：普通课
  public static readonly TEACH_TYPE_PRACTICE = 1;   // 授课方式：实验课

  public static readonly EXAM_TYPE_OPEN_BOOK = 0;   // 考核方式：开卷考试
  public static readonly EXAM_TYPE_CLOSE_BOOK = 1;  // 考核方式：闭卷考试

  id: number;                // id
  name: string;             // 课程
  credit: number;           // 学分
  totalLessonHour: number;  // 总课时
  type: number;             // 课程类型
  teachType: number;        // 授课方式
  examType: number;         // 考核方式
  majorList: Major[]        // 对应专业
}
