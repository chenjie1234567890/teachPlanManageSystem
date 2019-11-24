package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.Lesson;
import com.sixgod.teachPlan.service.LessonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author chenjie
 * @date 2019/11/24 11:10
 */
@Slf4j
@RestController
@RequestMapping("lesson")
public class LessonController {
    @Autowired
    LessonService lessonService;

    /**
     * 根据id更新lesson
     * @param lesson
     * @param id
     */
    @PutMapping("/{id}")
    public void updateContent(
            @RequestBody Lesson lesson,
            @PathVariable Long id
            ) {
        lessonService.update(lesson, id);
    }
}
