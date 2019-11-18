package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.EducatePlanJsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

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

    @ManyToMany(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    @JsonView({EducatePlanJsonView.getAll.class, NoneJsonView.class})
    List<Course> courseList;    // 包含的课程
}
