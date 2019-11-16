package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.service.MajorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class MajorServiceImplTest extends ServiceTest {
    @Autowired
    MajorService majorService;

    @Test
    void findAllByName() {
        int size = 5, page = 1;
        Pageable pageable = PageRequest.of(page, size);
        for (int i = 0;i < 10; i++) {
            majorService.getOneSavedMajor();
        }
        Page<Major> majorPage = majorService.findAllByName("", pageable);
        assertThat(majorPage.getContent().size()).isEqualTo(size);
    }
}