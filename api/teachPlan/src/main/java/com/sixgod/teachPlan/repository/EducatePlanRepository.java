package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.EducatePlan;
import com.sixgod.teachPlan.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducatePlanRepository extends JpaRepository<EducatePlan, Long> {
    /**
     * 根据专业查看所有培养计划信息
     * @param major
     * @param pageable
     * @return
     */
    Page<EducatePlan> findAllByMajor(Major major, Pageable pageable);

    /**
     * 查询学年号是否存在
     * @param termNumber
     * @return
     */
    boolean existsByTermNumberAndMajorId(Integer termNumber, Long majorId);
}
