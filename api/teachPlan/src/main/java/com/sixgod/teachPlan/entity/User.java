package com.sixgod.teachPlan.entity;

import javax.persistence.*;

/**
 * 用户
 * @author chenjie
 * @date 2019/10/18 17:09
 */
@Entity
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
     * 角色
     */
    private Integer role = ROLE_STUDENT;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
