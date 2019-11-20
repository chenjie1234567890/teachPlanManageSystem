package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Teacher;

public interface TeacherService {
    /**
     * 获取当前登录的教师
     * 先执行userService的getCurrentLoginUser获取当前登录用户
     * 然后jpa查询findBy
     * @return Teacher
     */
    Teacher getCurrentLoginTeacher();
}
