package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.CourseJsonView;
import com.sixgod.teachPlan.jsonView.MajorJsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
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
public class Major {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String name;                // 专业名

    @JsonView({MajorJsonView.getAll.class, NoneJsonView.class})
    @ManyToMany(fetch = FetchType.EAGER)
    List<Course> courseList;    // 包含的课程列表

    @OneToMany(mappedBy = "major")
    @JsonView({NoneJsonView.class})
    List<EducatePlan> educatePlanList;
}
