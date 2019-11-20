package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 教师仓库
 */
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    /**
     * 通过用户id获取教师
     */
    Teacher findByUserId(Long userId);
}
