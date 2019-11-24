package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Course;
import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.repository.MajorRepository;
import com.sixgod.teachPlan.service.CourseService;
import com.sixgod.teachPlan.service.MajorService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@Slf4j
class MajorServiceImplTest extends ServiceTest {
    @Autowired
    MajorService majorService;
    @Autowired
    CourseService courseService;
    @Autowired
    MajorRepository majorRepository;
    @Test
    void findAllByName() {
        int size = 5, page = 1;
        Pageable pageable = PageRequest.of(page, size);
        for (int i = 0;i < 10; i++) {
            majorService.getOneSavedMajor();
        }
        Page<Major> majorPage = majorService.findAllByName("", pageable);
        assertThat(majorPage.getContent().size()).isEqualTo(size);
    }

    @Test
    void findAllByCourseId() {
        log.info("获取两个保存的课程");
        Course course1 = courseService.saveRandomCourse();
        Course course2 = courseService.saveRandomCourse();

        log.info("课程列表1存两个课程，课程列表2存1个课程");
        List<Course> courseList1 = new ArrayList<>();
        List<Course> courseList2 = new ArrayList<>();
        courseList1.add(course1);
        courseList1.add(course2);
        courseList2.add(course1);

        log.info("获取两个未保存的专业");
        Major major1 = majorService.getOneMajor();
        Major major2 = majorService.getOneMajor();

        log.info("专业1对应课程列表1");
        major1.setCourseList(courseList1);
        log.info("专业2对应课程列表2");
        major2.setCourseList(courseList2);
        log.info("保存专业");
        majorRepository.save(major1);
        majorRepository.save(major2);


        log.info("传入课程1id号，断言返回的专业有两个");
        List<Major> majorList = majorService.findAllByCourseId(course1.getId());
        assertThat(majorList.size()).isEqualTo(2);
    }
}