package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Lesson;

public interface LessonService {
    /**
     * 根据id更新课时
     * @param lesson
     * @param id
     */
    void update(Lesson lesson, Long id);

    /**
     * 根据id获取课时
     * @param id
     * @return
     */
    Lesson findById(Long id);
}
