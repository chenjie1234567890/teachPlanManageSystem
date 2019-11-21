package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Student;
import com.sixgod.teachPlan.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("student")

public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/getCurrentLoginStudent")
    public Student getCurrentLoginStudent()
    {
        return studentService.getCurrentLoginStudent();
    }
}
