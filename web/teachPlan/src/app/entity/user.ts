export class User {
  public static readonly ROLE_STUDENT = 0;
  public static readonly ROLE_TEACHER = 1;
  public static readonly ROLE_ADMIN = 2;

  private id: number;

  /**
   * 用户
   */
  private  userName: string;

  /**
   * 密码
   */
  private  password: string;

  /**
   * 角色
   */
  private  role: number = User.ROLE_STUDENT;
}
