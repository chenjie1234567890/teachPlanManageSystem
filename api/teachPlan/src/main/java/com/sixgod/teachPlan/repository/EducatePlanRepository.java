package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.EducatePlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducatePlanRepository extends JpaRepository<EducatePlan, Long> {
    /**
     * 根据姓名查看所有培养计划信息
     * @param name
     * @param pageable
     * @return
     */
    Page<EducatePlan> findAllByNameLike(String name, Pageable pageable);

    /**
     * 查询学期号是否存在
     * @param termNumber
     * @return
     */
    boolean existsByTermNumber(Integer termNumber);
}
