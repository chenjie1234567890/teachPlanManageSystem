package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.EducatePlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EducatePlanService {
    /**
     * 根据专业查询培养计划分页信息
     */
    Page<EducatePlan> findAllByMajor(Long majorId, Pageable pageable);
    /**
     * 新增
     */
    void add(EducatePlan educatePlan);

    /**
     * 更新
     */
    void update(Long id, EducatePlan educatePlan);

    /**
     * 删除
     */
    void deleteById(Long id);

    /**
     * 获取一个未保存的培养计划
     */
    EducatePlan getOneEducatePlan();

    /**
     * 获取一个保存的培养计划
     */

    EducatePlan getOneSavedEducatePlan();

    /**
     * 根据id获取培养计划
     */
    EducatePlan findById(Long id);

    /**
     * 获取所有培养计划
     */
    List<EducatePlan> getAllEducatePlan();
}
