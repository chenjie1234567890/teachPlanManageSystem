package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import com.sixgod.teachPlan.jsonView.SemesterJsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

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

    Boolean currentSemester = false;    // 是否当前学期

    Date startTime;     // 开始时间

    Date endTime;       // 结束时间

    @JsonView({NoneJsonView.class, SemesterJsonView.getAll.class})
    @ManyToMany(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    List<Course> courseList;    // 该学期开设的课程
}
