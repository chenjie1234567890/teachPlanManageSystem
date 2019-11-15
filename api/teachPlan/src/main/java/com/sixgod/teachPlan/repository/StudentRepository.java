package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 学生仓库
 * @author chenjie
 * @date 2019/11/15 16:26
 */
public interface StudentRepository extends JpaRepository<Student, Long> {
}
