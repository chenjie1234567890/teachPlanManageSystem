package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.Course;
import com.sixgod.teachPlan.jsonView.CourseJsonView;
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
    @JsonView(CourseJsonView.getBase.class)
    public Page<Course> getCoursePage(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable){
        Page<Course> coursePage = courseService.findAllByName(name, pageable);
        return coursePage;
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
    @PutMapping("/{id}")
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

    /**
     * 获取所有课程
     * @return
     */
    @JsonView(CourseJsonView.getBase.class)
    @GetMapping("/getAllCourse")
    public List<Course> getAllCourse(){
        return courseService.getAllCourse();
    }

    /**
     * 根据id获取课程
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @JsonView(CourseJsonView.getBase.class)
    public Course findById(@PathVariable Long id) {
        return courseService.findById(id);
    }

    /**
     * 查询课程名是否存在
     * @param name
     * @return
     */
    @GetMapping("/existByName")
    public Boolean existByName(String name){
        return courseService.existByName(name);
    }

    @JsonView(CourseJsonView.getBase.class)
    @GetMapping("/findBySemesterAndTeacher")
    public List<Course> findBySemesterAndTeacher(
            @RequestParam(name = "semesterId") Long semesterId,
            @RequestParam(name = "teacherId") Long teacherId) {
        List<Course> courseList = courseService.findBySemesterAndTeacher(semesterId, teacherId);
        return courseList;
    }
}
