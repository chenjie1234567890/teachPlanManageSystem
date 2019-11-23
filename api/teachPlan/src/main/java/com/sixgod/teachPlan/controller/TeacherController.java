package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.jsonView.TeacherJsonView;
import com.sixgod.teachPlan.service.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("teacher")
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    /**
     * 获取当前登录教师
     * @return
     */
    @JsonView(TeacherJsonView.getCurrentLoginTeacher.class)
    @GetMapping("/getCurrentLoginTeacher")
    public Teacher getCurrentLoginTeacher(){
        Teacher teacher = teacherService.getCurrentLoginTeacher();
        return teacher;
    }

    /**
     * 根据ID更新教师
     * @param teacher
     * @param id
     */
    @PutMapping("/{id}")
    public void update(@RequestBody Teacher teacher, @PathVariable Long id){
        teacherService.upadte(id, teacher);
    }
}
