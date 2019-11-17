package com.sixgod.teachPlan.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @author chenjie
 * @date 2019/11/13 9:46
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String name;

    Date startTime;     // 开始时间

    Date endTime;       // 结束时间

    @ManyToMany
    List<Course> courseList;    // 该学期开设的课程
}
