package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.Student;
import com.sixgod.teachPlan.jsonView.StudentJsonView;
import com.sixgod.teachPlan.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("student")

public class StudentController {
    @Autowired
    StudentService studentService;

    /**
     * 获取当前登录学生
     * @return
     */
    @JsonView(StudentJsonView.getAll.class)
    @GetMapping("/getCurrentLoginStudent")
    public Student getCurrentLoginStudent() {
        return studentService.getCurrentLoginStudent();
    }

    /**
     * 根据ID更新学生
     * @param student
     * @param id
     */
    @PutMapping("/{id}")
    public void update(@RequestBody Student student, @PathVariable Long id){
        studentService.upadte(id, student);
    }
}
