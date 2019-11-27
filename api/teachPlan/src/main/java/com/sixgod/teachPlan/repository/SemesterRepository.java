package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Semester;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface SemesterRepository extends JpaRepository <Semester,Long > {

    /**
     * 按照姓名查询学期页
     * @param name
     * @param pageable
     * @return
     */
    Page<Semester> findByNameLike(String name, Pageable pageable);

    /**
     * 查询学期名是否存在
     * @param name
     * @return
     */
    boolean existsByName(String name);

    Semester findByCurrentSemesterTrue();
}
