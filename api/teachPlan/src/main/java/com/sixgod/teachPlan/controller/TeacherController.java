package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.service.TeacherService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @GetMapping("/getCurrentLoginTeacher")
    public Teacher getCurrentLoginTeacher(){
        return teacherService.getCurrentLoginTeacher();
    }
}
