package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Lesson;
import com.sixgod.teachPlan.repository.LessonRepository;
import com.sixgod.teachPlan.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

/**
 * @author chenjie
 * @date 2019/11/24 11:03
 */
@Service
public class LessonServiceImpl implements LessonService {
    @Autowired
    LessonRepository lessonRepository;

    @Override
    public void update(Lesson lesson, Long id) {
        Lesson persistLesson = findById(id);
        if (lesson.getContent() != null) {
            persistLesson.setContent(lesson.getContent());
        }
        if (lesson.getWeight() != null) {
            persistLesson.setWeight(lesson.getWeight());
        }
        lessonRepository.save(persistLesson);
    }

    @Override
    public Lesson findById(Long id) {
        Lesson persistLesson = lessonRepository.findById(id).orElse(null);
        if (persistLesson == null){
            throw new EntityNotFoundException("课时id为：" + id + "不存在");
        }
        return persistLesson;
    }
}
