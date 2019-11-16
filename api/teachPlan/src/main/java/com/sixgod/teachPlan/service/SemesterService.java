package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Semester;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SemesterService {
    Page<Semester> findAllByName(String name, Pageable pageable);
}
