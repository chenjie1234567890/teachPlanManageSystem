package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Student;
import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.StudentRepository;
import com.sixgod.teachPlan.service.StudentService;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.jws.soap.SOAPBinding;
import javax.persistence.EntityNotFoundException;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    UserService userService;
    @Autowired
    StudentRepository studentRepository;
    @Override
    public Student getCurrentLoginStudent() {
        User user = userService.getCurrentLoginUser();
        return studentRepository.findByUserId(user.getId());
    }

    @Override
    public void upadte(Long id, Student student) {
        Student persistStudent = findById(id);
        persistStudent.setStudentNum(student.getStudentNum());
        persistStudent.setMajor(student.getMajor());
        studentRepository.save(persistStudent);
    }

    @Override
    public Student findById(Long studentId) {
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student == null) {
            throw new EntityNotFoundException("id为" + studentId + "的学生不存在");
        }
        return student;
    }
}
