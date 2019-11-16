package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Semester;
import com.sixgod.teachPlan.service.SemesterService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("Semester")

public class SemesterController {
    @Autowired
    SemesterService semesterService;

    @GetMapping
    public Page<Semester> getSemesterPage(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(sort = "id",direction = Sort.Direction.DESC) Pageable pageable){
        return semesterService.findAllByName(name,pageable);
    }
}
