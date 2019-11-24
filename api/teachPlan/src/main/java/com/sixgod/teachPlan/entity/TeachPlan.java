package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import com.sixgod.teachPlan.jsonView.TeachPlanJsonView;
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

    Boolean isPass;         // 是否通过审核

    @JsonView({NoneJsonView.class, TeachPlanJsonView.getAll.class})
    @OneToMany(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    List<Lesson> lessonList; // 课时列表

    @JsonView(TeachPlanJsonView.getBase.class)
    @ManyToOne
    Teacher teacher;

    @JsonView({TeachPlanJsonView.getBase.class,
            TeachPlanJsonView.getAll.class})
    @ManyToOne
    Semester semester;      // 对应学期

    @JsonView({TeachPlanJsonView.getBase.class,
            TeachPlanJsonView.getAll.class})
    @ManyToOne
    Major major;            // 对应专业

    @JsonView({TeachPlanJsonView.getBase.class,
            TeachPlanJsonView.getAll.class})
    @ManyToOne
    Course course;          // 对应课程
}
