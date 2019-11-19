package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.jsonView.SemesterJsonView;
import com.sixgod.teachPlan.service.SemesterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("semester")
public class SemesterController {
    @Autowired
    SemesterService semesterService;

    /**
     * 按照姓名查找学期
     * @param name
     * @param pageable
     * @return
     */
    @JsonView(SemesterJsonView.getAll.class)
    @GetMapping
    public Page<Semester> getSemesterPage(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable){
        Page<Semester> semesterPage = semesterService.findAllByName(name,pageable);
        return semesterPage;
    }

    /**
     * 新增学期
     * @param semester
     */
    @PostMapping("/add")
    public void add(@RequestBody Semester semester){
        semesterService.add(semester);
    }

    /**
     * 根据ID更新学期
     * @param semester
     * @param id
     */
    @PutMapping("/{id}")
    public void update(@RequestBody Semester semester,@PathVariable Long id){
        semesterService.upadte(id,semester);
    }

    /**
     * 根据id删除学期
     * @param id
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        semesterService.deleteById(id);
    }

    /**
     * 查询学期名是否存在
     * @param name
     * @return
     */
    @GetMapping("/existByName")
    public Boolean existByName(String name){
        return semesterService.existByName(name);
    }

    /**
     * 根据id查询学期
     * @param id
     * @return
     */
    @JsonView(SemesterJsonView.getAll.class)
    @GetMapping("/{id}")
    public Semester findById(@PathVariable Long id){
        return semesterService.findById(id);
    }

    /**
     * 将id代表学期指定为当前学期
     * @param id
     */
    @PostMapping("/setCurrentSemester")
    public void setCurrentSemester(Long id){
        semesterService.setCurrentSemester(id);
    }
}
