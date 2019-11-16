package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Course;
import org.springframework.data.domain.Pageable;
import com.sixgod.teachPlan.service.CourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("course")

public class CourseController {
    @Autowired
    CourseService courseService;

    /**
     * 根据姓名查看所有课程信息
     * @param name
     * @param pageable
     * @return  Page<Course>
     */
    @GetMapping
    public Page<Course> getCoursePage(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable){
        return courseService.findAllByName(name,pageable);
    }

    /** 新增
     * @param course
     */
    @PostMapping("add")
    public void add(@RequestBody Course course){
        courseService.add(course);
    }

    /**
     * 更新
     * @param id
     * @param course
     */
    @PostMapping("/{id}")
    public void update(@PathVariable Long id,@RequestBody Course course){
        courseService.update(id,course);
    }

    /**
     * 删除
     * @param id
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        courseService.deleteById(id);
    }

    @GetMapping
    public List<Course> getAllCourse(){
        return courseService.getAllCourse();
    }
}
