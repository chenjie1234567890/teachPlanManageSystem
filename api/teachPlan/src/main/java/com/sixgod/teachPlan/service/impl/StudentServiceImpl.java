package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Student;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.StudentRepository;
import com.sixgod.teachPlan.service.StudentService;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.jws.soap.SOAPBinding;

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
}
