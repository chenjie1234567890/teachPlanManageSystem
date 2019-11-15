package com.sixgod.teachPlan.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

/**
 * 用户
 * @author chenjie
 * @date 2019/10/18 17:09
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    final public static Integer ROLE_STUDENT = 0;
    final public static Integer ROLE_TEACHER = 1;
    final public static Integer ROLE_ADMIN = 2;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 用户
     */
    @Column(unique = true)
    private String userName;

    /**
     * 密码
     */
    private String password;

    /**
     * 确认密码，不映射到数据表
     */
    @Transient
    private String confirmPassword;

    /**
     * 角色
     */
    private Integer role = ROLE_STUDENT;
}
