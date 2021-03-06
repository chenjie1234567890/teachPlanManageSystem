package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    /**
     * 根据姓名查询所有课程信息
     * @param name
     * @param pageable
     * @return
     */
    Page<Course> findByNameLike(String name, Pageable pageable);

    /**
     * 查询课程名是否存在
     * @param name
     * @return
     */
    boolean existsByName(String name);
}
