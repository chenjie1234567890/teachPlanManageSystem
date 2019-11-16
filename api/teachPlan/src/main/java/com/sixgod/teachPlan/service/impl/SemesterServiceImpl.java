package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SemesterServiceImpl implements SemesterService {
    @Autowired


    @Override
    public Page<Semester> findAllByName(String name, Pageable pageable) {
        if (name.equals("")){
            return
        }
    }
}
