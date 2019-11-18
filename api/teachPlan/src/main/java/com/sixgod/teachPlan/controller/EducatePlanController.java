package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.EducatePlan;
import com.sixgod.teachPlan.jsonView.EducatePlanJsonView;
import com.sixgod.teachPlan.service.EducatePlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("educatePlan")
public class EducatePlanController {
    @Autowired
    EducatePlanService educatePlanService;

    /**
     * 根据专业id查询所有培养计划分页信息
     * @param majorId
     * @param pageable
     * @return
     */
    @GetMapping
    @JsonView(EducatePlanJsonView.getAll.class)
    public Page<EducatePlan> getEducatPlanPage(
            @RequestParam(name = "majorId",required = false, defaultValue = "0") Long majorId,
            @PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable
            ) {
        Page<EducatePlan> educatePlanPage = educatePlanService.findAllByMajor(majorId,pageable);
        return educatePlanPage;
    }

    /**
     * 新增培养计划
     * @param educatePlan
     */
    @PostMapping("add")
    public void add(@RequestBody EducatePlan educatePlan){
        educatePlanService.add(educatePlan);
    }

    /**
     * 根据id更新培养计划
     * @param educatePlan
     * @param id
     */
    @PutMapping("/{id}")
    public void update(@RequestBody EducatePlan educatePlan,@PathVariable Long id){
        educatePlanService.update(id, educatePlan);
    }

    /**
     * 根据id删除培养计划
     * @param id
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        educatePlanService.deleteById(id);
    }

    /**
     * 根据id查询培养计划
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @JsonView(EducatePlanJsonView.getAll.class)
    public EducatePlan findById(@PathVariable Long id){
        return educatePlanService.findById(id);
    }

    /**
     * 返回全部培养计划
     * @return
     */
    @GetMapping("/getAllEducatePlan")
    public List<EducatePlan> getAllEducatePlan(){
        return educatePlanService.getAllEducatePlan();
    }

    /**
     * 查看学期号是否存在
     * @param termNumber
     * @return
     */
    @GetMapping("/existByTermNumber")
    public Boolean existByTermNumber(Integer termNumber){
        return educatePlanService.existByTermNumber(termNumber);
    }
}
