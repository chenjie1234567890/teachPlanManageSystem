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
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Integer staffNumber;    // 工号
    @OneToOne
    User user;  //用户
    @OneToMany
    List<TeachPlan> teachPlanList;

    @ManyToMany
    List<Course> courseList;    //教授的课程列表
}
