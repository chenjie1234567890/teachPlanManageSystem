package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.service.MajorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

/**
 * @author chenjie
 * @date 2019/11/15 19:24
 */
@Slf4j
@RestController
@RequestMapping("major")
public class MajorController {
    @Autowired
    MajorService majorService;

    /**
     * 根据姓名查询所有专业分页信息
     * @param name
     * @param pageable
     * @return Page<Major>
     */
    @GetMapping
    public Page<Major> getMajorPage(
            @RequestParam(name = "name", required = false, defaultValue = "") String name,
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return majorService.findAllByName(name, pageable);
    }

    /**
     * 新增
     * @param major
     */
    @PostMapping("add")
    public void add(@RequestBody Major major) {
        majorService.add(major);
    }

    /**
     * 更新专业
     * @param id
     * @param major
     */
    @PostMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Major major) {
        majorService.update(id, major);
    }

    /**
     * 根据id删除
     * @param id
     */
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        majorService.deleteById(id);
    }
}
