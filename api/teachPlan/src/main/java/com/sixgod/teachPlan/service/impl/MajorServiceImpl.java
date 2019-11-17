package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.repository.MajorRepository;
import com.sixgod.teachPlan.service.MajorService;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;

/**
 * @author chenjie
 * @date 2019/11/16 9:59
 */
@Service
public class MajorServiceImpl implements MajorService {
    private final MajorRepository majorRepository;

    @Autowired
    public MajorServiceImpl(MajorRepository majorRepository) {
        this.majorRepository = majorRepository;
    }

    @Transactional
    @Override
    public Page<Major> findAllByName(String name, Pageable pageable) {
        if (name.equals("")) {
            return majorRepository.findAll(pageable);
        } else {
            return majorRepository.findAllByNameLike(name, pageable);
        }
    }

    @Override
    public void add(Major major) {
        majorRepository.save(major);
    }

    @Override
    public void update(Long id, Major major) {
        Major persistMajor = majorRepository.findById(id).orElse(null);
        if (persistMajor == null) {
            throw new EntityNotFoundException("专业id为：" + id + "不存在");
        } else {
            persistMajor.setName(major.getName());
            persistMajor.setCourseList(major.getCourseList());
            majorRepository.save(persistMajor);
        }
    }

    @Override
    public void deleteById(Long id) {
        Major persistMajor = majorRepository.findById(id).orElse(null);
        if (persistMajor == null) {
            throw new EntityNotFoundException("专业id为：" + id + "不存在");
        } else {
           majorRepository.deleteById(persistMajor.getId());
        }
    }

    @Override
    public Major getOneMajor() {
        return Major.builder()
                .name(RandomStringUtils.randomAlphanumeric(5))
                .build();
    }

    @Override
    public Major getOneSavedMajor() {
        return majorRepository.save(getOneMajor());
    }

    @Override
    public Major findById(Long id) {
        return majorRepository.findById(id).orElse(null);
    }

    @Override
    public List<Major> getAllMajor() {
        return majorRepository.findAll();
    }

    @Override
    public Boolean existByName(String name) {
        if(majorRepository.existsByName(name)){
            return true;
        }
        else {
            return false;
        }
    }
}
