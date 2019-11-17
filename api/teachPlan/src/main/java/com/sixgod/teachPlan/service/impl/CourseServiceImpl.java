package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Course;
import com.sixgod.teachPlan.repository.CourseRepository;
import com.sixgod.teachPlan.service.CourseService;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseRepository courseRepository;

    @Override
    public Page<Course> findAllByName(String name, Pageable pageable) {
        if(name.equals("")){
            return courseRepository.findAll(pageable);
        }
        else {
            return courseRepository.findAllByNameLike(name,pageable);
        }
    }

    @Override
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    @Override
    public void update(Long id, Course course) {
        Course course1 = courseRepository.findById(id).orElse(null);
        if(course1 == null){
            throw new EntityNotFoundException("课程id为：" + id + "不存在");
        }
        else{
            course1.setCredit(course.getCredit());
            course1.setName(course.getName());
            course1.setTotalLessonHour(course.getTotalLessonHour());
            course1.setType(course.getType());
            courseRepository.save(course1);
        }
    }

    @Override
    public void add(Course course) {
        courseRepository.save(course);
    }

    @Override
    public void deleteById(Long id) {
        Course course = courseRepository.findById(id).orElse(null);
        if(course == null){
            throw new EntityNotFoundException("课程id为：" + id + "不存在");
        }
        else {
            courseRepository.deleteById(id);
        }
    }

    @Override
    public Course getRandomCourse() {
        return Course.builder()
                .name(RandomStringUtils.randomAlphanumeric(5))
                .build();
    }

    @Override
    public Course saveRandomCourse() {
        return courseRepository.save(getRandomCourse());
    }

    @Override
    public Boolean existByName(String name) {
        if(courseRepository.existsByName(name)){
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public Course findById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }
}
