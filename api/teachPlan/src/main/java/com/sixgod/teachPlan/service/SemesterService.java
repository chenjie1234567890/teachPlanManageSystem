package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Semester;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

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
}