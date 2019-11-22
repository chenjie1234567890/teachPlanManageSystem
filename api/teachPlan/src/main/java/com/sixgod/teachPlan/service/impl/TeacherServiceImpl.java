package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.TeacherRepository;
import com.sixgod.teachPlan.service.TeacherService;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    UserService userService ;

    @Override
    public Teacher getCurrentLoginTeacher() {
        User user = userService.getCurrentLoginUser();
        return teacherRepository.findByUserId(user.getId());
    }
}
