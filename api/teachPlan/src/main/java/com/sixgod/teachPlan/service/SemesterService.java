package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Semester;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SemesterService {
    /**
     * 按照姓名查找学期
     * @param name
     * @param pageable
     * @return
     */
    Page<Semester> findAllByName(String name, Pageable pageable);

    /**
     * 新增学期
     * @param semester
     */
    void add(Semester semester);

    /**
     * 更新学期信息
     * @param semester
     * @param id
     */
    void upadte(Long id,Semester semester);

    /**
     * 删除学期
     * @param id
     */
    void deleteById(Long id);

    /**
     * 校验学期名是否存在
     */
    Boolean existByName(String name);

    /**
     * 根据id获取学期
     */
    Semester findById(Long id);

    /**
     * 将id所代表的学期指定为当前学期
     * @param id
     */
    void setCurrentSemester(Long id);

    /**
     * 获取当前开放学期
     */
    Semester getOpenSemester();

    /**
     * 获取所有学期
     * @return
     */
    List<Semester> findAll();
}
