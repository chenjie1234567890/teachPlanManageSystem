package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.Exception.EntityRepeatException;
import com.sixgod.teachPlan.entity.EducatePlan;
import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.repository.EducatePlanRepository;
import com.sixgod.teachPlan.service.EducatePlanService;
import org.apache.commons.lang.math.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class EducatePlanServiceImpl implements EducatePlanService {
    @Autowired
    EducatePlanRepository educatePlanRepository;

    @Override
    public Page<EducatePlan> findAllByMajor(Long majorId, Pageable pageable) {
        if(majorId == 0){
            return educatePlanRepository.findAll(pageable);
        }
        else {
            return educatePlanRepository.findAllByMajor(
                    Major.builder().id(majorId).build(), pageable);
        }
    }

    @Override
    public void add(EducatePlan educatePlan) {
        if (educatePlanRepository.existsByTermNumberAndMajorId(
                educatePlan.getTermNumber(),
                educatePlan.getMajor().getId()
        )) {
            throw new EntityRepeatException("培养计划添加重复");
        }
        educatePlanRepository.save(educatePlan);
    }

    @Override
    public void update(Long id, EducatePlan educatePlan) {
        EducatePlan educatePlan1 = educatePlanRepository.findById(id).orElse(null);
        if(educatePlan1 == null){
            throw new EntityNotFoundException("培养计划id为：" + id + "不存在");
        }
        else{
            educatePlan1.setCourseList(educatePlan.getCourseList());
            educatePlan1.setMajor(educatePlan.getMajor());
            educatePlan1.setTermNumber(educatePlan.getTermNumber());
            educatePlanRepository.save(educatePlan1);
        }
    }

    @Override
    public void deleteById(Long id) {
        EducatePlan educatePlan = educatePlanRepository.findById(id).orElse(null);
        if(educatePlan == null){
            throw new EntityNotFoundException("培养计划id为：" + id + "不存在");
        }
        else {
            educatePlanRepository.deleteById(id);
        }
    }

    @Override
    public EducatePlan getOneEducatePlan() {
        return EducatePlan.builder()
                .termNumber(RandomUtils.nextInt())
                .build();
    }

    @Override
    public EducatePlan getOneSavedEducatePlan() {
        return educatePlanRepository.save(getOneSavedEducatePlan());
    }

    @Override
    public EducatePlan findById(Long id) {
        return educatePlanRepository.findById(id).orElse(null);
    }

    @Override
    public List<EducatePlan> getAllEducatePlan() {
        return educatePlanRepository.findAll();
    }
}
