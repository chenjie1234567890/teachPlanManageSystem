export class User {
  public static readonly ROLE_STUDENT = 0;
  public static readonly ROLE_TEACHER = 1;
  public static readonly ROLE_ADMIN = 2;

  id: number;                       // 用户id
  userName: string;                 // 用户名
  password: string;                 // 密码
  confirmPassword: string;          // 确认密码
  role: number = User.ROLE_STUDENT; // 角色
}
