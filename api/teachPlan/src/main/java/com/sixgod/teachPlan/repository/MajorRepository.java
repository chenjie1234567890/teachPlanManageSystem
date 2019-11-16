package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MajorRepository extends JpaRepository<Major, Long> {
    /**
     * 根据姓名查询所有专业分页信息
     * @param name
     * @return
     */
    Page<Major> findAllByNameLike(String name, Pageable pageable);

    /**
     * 查询所有专业分页信息
     * @param pageable
     * @return
     */
    Page<Major> findAll(Pageable pageable);
}
