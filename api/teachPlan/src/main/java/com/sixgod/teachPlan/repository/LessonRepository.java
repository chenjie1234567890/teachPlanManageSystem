package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRepository extends JpaRepository<Lesson, Long> {
}
