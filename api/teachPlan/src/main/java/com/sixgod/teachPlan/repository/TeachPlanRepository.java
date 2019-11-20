package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.TeachPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeachPlanRepository extends JpaRepository<TeachPlan, Long> {
    /**
     * 通过教师id获取教学计划分页信息
     * @param teacherId
     * @param pageable
     * @return
     */
    Page<TeachPlan> findAllByTeacherId(Long teacherId, Pageable pageable);
}
