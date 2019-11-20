package com.sixgod.teachPlan.entity;

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
public class TeachPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Integer teacheType;     // 授课方式
    Integer examType;       // 考核方式
    Boolean isPass;         // 是否通过审核

    @OneToMany
    List<Lesson> lessonList; // 课时列表

    @ManyToOne
    Semester semester;      // 对应学期

    @ManyToOne
    Major major;            // 对应专业

    @ManyToOne
    Course course;          // 对应课程
}
