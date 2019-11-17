package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    /**
     * 根据姓名查询所有课程信息
     * @param name
     * @param pageable
     * @return
     */
    Page<Course> findAllByNameLike(String name, Pageable pageable);
}
