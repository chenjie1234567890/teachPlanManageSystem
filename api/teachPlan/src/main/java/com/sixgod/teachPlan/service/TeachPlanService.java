package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.TeachPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 教学计划服务
 */
public interface TeachPlanService {
    /**
     * 获取当前登录教师的教学计划列表
     * 通过教师服务，获取当前登录教师
     * 再执行教学计划仓库findAllByTeacherById
     * @return Page<TeachPlan>
     */
    Page<TeachPlan> getTeachPlanPage(Pageable pageable);

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
    void update(TeachPlan teachPlan, Long id);

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
