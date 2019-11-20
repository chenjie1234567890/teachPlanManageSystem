package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Student;

public interface StudentService {
    /**
     * 根据用户id获取学生实体
     * @param id
     * @return
     */
    Student findByUserId(Long id);
}
