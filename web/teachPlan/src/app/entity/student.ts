import {Major} from './major';
import {User} from './user';

export class Student {
  id: number;         // id
  studentNum: number; // 学号
  major: Major;       // 所属专业
  user: User;         // 对应的用户
}
