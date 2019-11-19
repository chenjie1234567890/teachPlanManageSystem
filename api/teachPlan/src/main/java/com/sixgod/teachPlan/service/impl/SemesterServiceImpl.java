package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.repository.SemesterRepository;
import com.sixgod.teachPlan.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class SemesterServiceImpl implements SemesterService {
    @Autowired
    SemesterRepository semesterRepository;

    @Override
    public Page<Semester> findAllByName(String name, Pageable pageable) {
        if (name.equals("")){
            return semesterRepository.findAll(pageable);
        }
        else {
            return semesterRepository.findAllByNameLike(name,pageable);
        }
    }

    @Override
    public void add(Semester semester) {
        semesterRepository.save(semester);
    }

    @Override
    public void upadte(Long id, Semester semester) {
        Semester semester1 = semesterRepository.findById(id).orElse(null);
        if(semester1 == null){
            throw new EntityNotFoundException("学期id为：" + id + "不存在");
        }
        else {
            semester1.setName(semester.getName());
            semester1.setStartTime(semester.getStartTime());
            semester1.setEndTime(semester.getEndTime());
            semester1.setCourseList(semester.getCourseList());
            semesterRepository.save(semester1);
        }
    }

    @Override
    public void deleteById(Long id) {
        Semester semester = semesterRepository.findById(id).orElse(null);
        if(semester == null){
            throw new EntityNotFoundException("学期id为：" + id + "不存在");
        }
        else {
            semesterRepository.deleteById(id);
        }
    }

    @Override
    public Boolean existByName(String name) {
        if(semesterRepository.existsByName(name)){
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public Semester findById(Long id) {
        return semesterRepository.findById(id).orElse(null);
    }

    @Override
    public void setCurrentSemester(Long id) {
        // 判断设置的学期是否存在
        Semester semester = semesterRepository.findById(id).orElse(null);
        if (semester == null){
            throw new EntityNotFoundException("学期id为：" + id + "不存在");
        }

        // 设置当前学期状态
        List<Semester> semesterList = semesterRepository.findAll();
        for (Semester value : semesterList) {
            if (value.getId().equals(id)) {
                value.setCurrentSemester(!value.getCurrentSemester());
            } else {
                value.setCurrentSemester(false);
            }
        }

        // 保存数据
        semesterRepository.saveAll(semesterList);
    }
}
