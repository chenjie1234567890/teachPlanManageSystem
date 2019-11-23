package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.TeachPlan;
import com.sixgod.teachPlan.jsonView.TeachPlanJsonView;
import com.sixgod.teachPlan.service.TeachPlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("teachplan")
public class TeachPlanController {
    @Autowired
    TeachPlanService teachPlanService;

    /**
     * 获取当前登录教师的教学计划列表
     * @param pageable
     * @return
     */
    @JsonView(TeachPlanJsonView.getBase.class)
    @GetMapping
    public Page<TeachPlan> getTeachPlanPage(@PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable) {
        return teachPlanService.getTeachPlanPage(pageable);
    }

    /**
     * 新增教学计划
     * @param teachPlan
     */
    @PostMapping("add")
    public void add(@RequestBody TeachPlan teachPlan) {
        teachPlanService.add(teachPlan);
    }

    /**
     * 更新教学计划
     * @param teachPlan
     */
    @PostMapping("/update")
    public void update(@RequestBody TeachPlan teachPlan) {
        teachPlanService.update(teachPlan);
    }

    /**
     * 根据id查找教学计划
     * @param id
     * @return
     */
    @PostMapping("/{id}")
    public TeachPlan findById(@PathVariable Long id) {
        return teachPlanService.findById(id);
    }

    /**
     * 根据id删除教学计划
     * @param id
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        teachPlanService.deleteById(id);
    }
}
