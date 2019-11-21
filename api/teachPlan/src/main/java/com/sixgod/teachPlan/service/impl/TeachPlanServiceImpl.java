package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Lesson;
import com.sixgod.teachPlan.entity.TeachPlan;
import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.repository.TeachPlanRepository;
import com.sixgod.teachPlan.service.TeachPlanService;
import com.sixgod.teachPlan.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class TeachPlanServiceImpl implements TeachPlanService {
    @Autowired
    TeachPlanRepository teachPlanRepository;
    TeacherService teacherService;

    @Override
    public Page<TeachPlan> getTeachPlanPage(Pageable pageable) {
        Teacher teacher = teacherService.getCurrentLoginTeacher();
        return teachPlanRepository.findAllByTeacherId(teacher.getId(),pageable);
    }

    @Override
    public void add(TeachPlan teachPlan) {
        List<Lesson> lessonList = new ArrayList<>();
        int i = teachPlan.getCourse().getTotalLessonHour();
        Lesson lesson;
        for(int j = 0;j < i;j++){
            lesson = new Lesson();
            lesson.setLessonHour(j + 1);
            lessonList.add(lesson);
        }
        teachPlan.setLessonList(lessonList);

        teachPlanRepository.save(teachPlan);
    }

    @Override
    public void update(TeachPlan teachPlan) {
        teachPlanRepository.save(teachPlan);
    }

    @Override
    public TeachPlan findById(Long id) {
        TeachPlan teachPlan = teachPlanRepository.findById(id).orElse(null);
        if(teachPlan == null){
            throw new EntityNotFoundException("教学计划id为：" + id + "不存在");
        }
        else{
            return teachPlan;
        }
    }

    @Override
    public void deleteById(Long id) {
        teachPlanRepository.deleteById(id);
    }
}
