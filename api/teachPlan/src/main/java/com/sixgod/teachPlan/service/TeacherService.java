package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Teacher;

public interface TeacherService {
    /**
     * 根据用户id获取教师实体
     * @param id
     * @return
     */
    Teacher findByUserId(Long id);
}
