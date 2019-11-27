package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.Exception.EntityRepeatException;
import com.sixgod.teachPlan.entity.Lesson;
import com.sixgod.teachPlan.entity.TeachPlan;
import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.repository.LessonRepository;
import com.sixgod.teachPlan.repository.TeachPlanRepository;
import com.sixgod.teachPlan.service.TeachPlanService;
import com.sixgod.teachPlan.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Service
public class TeachPlanServiceImpl implements TeachPlanService {
    @Autowired
    TeachPlanRepository teachPlanRepository;
    @Autowired
    TeacherService teacherService;
    @Autowired
    LessonRepository lessonRepository;

    @Override
    public Page<TeachPlan> getTeachPlanPage(Pageable pageable) {
        Teacher teacher = teacherService.getCurrentLoginTeacher();
        return teachPlanRepository.findAllByTeacherId(teacher.getId(),pageable);
    }

    @Override
    public void add(TeachPlan teachPlan) {
        if (teachPlanRepository.existsBySemesterIdAndMajorIdAndCourseIdAndTeacherId(
                teachPlan.getSemester().getId(),
                teachPlan.getMajor().getId(),
                teachPlan.getCourse().getId(),
                teacherService.getCurrentLoginTeacher().getId()
        )) {
            throw new EntityRepeatException("教学计划添加重复");
        }

        // 新增教学计划同时生成多个课时空表
        List<Lesson> lessonList = new ArrayList<>();
        int i = teachPlan.getCourse().getTotalLessonHour();
        Lesson lesson;
        for(int j = 0;j < i;j++){
            lesson = new Lesson();
            lesson.setLessonHour(j + 1);
            lessonList.add(lesson);
        }
        lessonRepository.saveAll(lessonList);
        teachPlan.setLessonList(lessonList);

        // 教学计划对应教师为当前登录教师
        teachPlan.setTeacher(teacherService.getCurrentLoginTeacher());

        teachPlanRepository.save(teachPlan);
    }

    public Boolean isExist(TeachPlan newteachPlan)  {
        List<TeachPlan> teachPlans = teachPlanRepository.findAllByTeacherId(teacherService.getCurrentLoginTeacher().getId());
        for (TeachPlan teachPlan: teachPlans) {
            if (teachPlan.getCourse().getId().equals(newteachPlan.getCourse().getId()) &&
                teachPlan.getMajor().getId().equals(newteachPlan.getMajor().getId()) &&
                teachPlan.getSemester().getId().equals(newteachPlan.getSemester().getId())) {
                throw new EntityRepeatException("教学计划添加重复");
            }
        }
        return false;
    }

    @Override
    public void update(TeachPlan teachPlan, Long id) {
        TeachPlan persistTeachPlan = findById(id);

        persistTeachPlan.setSemester(teachPlan.getSemester());
        persistTeachPlan.setCourse(teachPlan.getCourse());
        persistTeachPlan.setMajor(teachPlan.getMajor());

        teachPlanRepository.save(persistTeachPlan);
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
