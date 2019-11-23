package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import com.sixgod.teachPlan.jsonView.TeacherJsonView;
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
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Integer staffNumber;    // 工号

    @JsonView({NoneJsonView.class, TeacherJsonView.getCurrentLoginTeacher.class})
    @OneToOne
    User user;              //用户

    @JsonView({TeacherJsonView.getBase.class})
    @OneToMany
    List<TeachPlan> teachPlanList;

    @JsonView({NoneJsonView.class, TeacherJsonView.getCurrentLoginTeacher.class})
    @ManyToMany(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    List<Course> courseList;    //教授的课程列表
}
