package com.sixgod.teachPlan.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/**
 * @author chenjie
 * @date 2019/11/13 9:44
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EducatePlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Integer termNumber;  // 学年，例如1为第一学年，2为第二学年

    @ManyToOne
    Major major;        // 所属专业

    @ManyToMany
    List<Course> courseList;    // 包含的课程
}
