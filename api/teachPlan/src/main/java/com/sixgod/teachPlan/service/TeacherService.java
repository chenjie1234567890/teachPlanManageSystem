package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.entity.Teacher;

public interface TeacherService {
    /**
     * 获取当前登录的教师
     * 先执行userService的getCurrentLoginUser获取当前登录用户
     * 然后jpa查询findBy
     * @return Teacher
     */
    Teacher getCurrentLoginTeacher();

    /**
     * 根据id更新教师
     * @param id
     * @param teacher
     */
    void upadte(Long id, Teacher teacher);

    /**
     * 根据id获取教师
     * @param teacherId
     * @return
     */
    Teacher findById(Long teacherId);
}
