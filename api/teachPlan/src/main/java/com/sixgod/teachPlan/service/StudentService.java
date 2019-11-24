package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Student;

public interface StudentService {
    /**
     * 获取当前登录的学生
     * @return Teacher
     */
    Student getCurrentLoginStudent();

    /**
     * 更新学生
     * @param id
     * @param student
     */
    void upadte(Long id, Student student);

    /**
     * 根据id获取学生
     * @param id
     * @return
     */
    Student findById(Long id);
}
