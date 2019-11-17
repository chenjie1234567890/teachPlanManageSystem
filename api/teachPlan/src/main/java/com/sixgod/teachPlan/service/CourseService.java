package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CourseService {

    /**
     * 获取所有课程
     * @return
     */
    List<Course> getAllCourse();

    /**
     * 更新
     * */
    void update(Long id, Course course);

    /**
     * 新增
     */
    void add(Course course);

    /**
     * 删除
     */
    void deleteById(Long id);

    /**
     * 根据姓名查询所有课程分页信息
     * @param name
     * @param pageable
     * @return
     */
    Page<Course> findAllByName(String name, Pageable pageable);

    /**
     * 生成一个随机课程
     * @return
     */
    Course getRandomCourse();

    /**
     * 将生成随机课程存入数据库
     * @return
     */
    Course saveRandomCourse();

//    /**
//     * 校验课程名是否存在
//     */
//    Boolean existByName(String name);
//
//    /**
//     * 根据id获取课程
//     */
//    Course findById(Long id);
}
