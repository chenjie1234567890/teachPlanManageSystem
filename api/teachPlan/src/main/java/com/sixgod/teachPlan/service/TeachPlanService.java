package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.TeachPlan;
import org.springframework.data.domain.Page;

/**
 * 教学计划服务
 */
public interface TeachPlanService {
    /**
     * 通过教师Id获取分页信息
     * @param teacherId
     * @return
     */
    Page<TeachPlan> findAllByTeacherId(Long teacherId);

    /**
     * 新增
     * 新增教学计划同时生成n个Lesson并set到教学计划中,且课时次序lessonHour从1加到n
     * n是教学计划对应的课程的总课时totalLessonHour
     * @param teachPlan
     */
    void add(TeachPlan teachPlan);

    /**
     * 更新
     * @param teachPlan
     */
    void update(TeachPlan teachPlan);

    /**
     * 根据id获取教学计划
     * @param id
     * @return
     */
    TeachPlan findById(Long id);

    /**
     * 根据id删除教学计划
     * @param id
     */
    void deleteById(Long id);
}
