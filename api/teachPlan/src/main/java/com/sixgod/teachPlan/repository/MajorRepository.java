package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Course;
import com.sixgod.teachPlan.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MajorRepository extends JpaRepository<Major, Long> {
    /**
     * 根据姓名查询所有专业分页信息
     * @param name
     * @return
     */
    Page<Major> findByNameLike(String name, Pageable pageable);

    /**
     * 查询所有专业分页信息
     * @param pageable
     * @return
     */
    Page<Major> findAll(Pageable pageable);

    /**
     * 查询专业名是否存在
     * @param name
     * @return
     */
    boolean existsByName(String name);

    List<Major> findAllByCourseListContaining(Course course);
}
