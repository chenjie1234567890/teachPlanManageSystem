package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Student;

public interface StudentService {
    /**
     * 获取当前登录的学生
     * @return Teacher
     */
    Student getCurrentLoginStudent();
}
