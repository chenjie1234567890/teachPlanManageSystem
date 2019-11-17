package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.CourseJsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/**
 * @author chenjie
 * @date 2019/11/13 9:45
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String name;                // 课程名
    Float credit;               // 学分
    Integer totalLessonHour;    // 总课时
    Integer type;               // 课程类型

    @JsonView({CourseJsonView.getAll.class, NoneJsonView.class})
    @ManyToMany
    List<Major> majorList;       // 对应的专业
}
