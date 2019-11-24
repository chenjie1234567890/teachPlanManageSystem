package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.TeacherRepository;
import com.sixgod.teachPlan.service.TeacherService;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    UserService userService;

    @Override
    public Teacher getCurrentLoginTeacher() {
        User user = userService.getCurrentLoginUser();
        return teacherRepository.findByUserId(user.getId());
    }

    @Override
    public void upadte(Long id, Teacher teacher) {
        Teacher persistTeacher = findById(id);
        persistTeacher.setStaffNumber(teacher.getStaffNumber());
        persistTeacher.setCourseList(teacher.getCourseList());
        teacherRepository.save(persistTeacher);
    }

    @Override
    public Teacher findById(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId).orElse(null);
        if (teacher == null) {
            throw new EntityNotFoundException("id为" + teacherId + "的教师不存在");
        }
        return teacher;
    }
}
