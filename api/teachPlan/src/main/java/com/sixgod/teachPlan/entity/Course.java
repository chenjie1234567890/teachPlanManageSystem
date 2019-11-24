package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.CourseJsonView;
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
 * @date 2019/11/13 9:45
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    final public static Integer COURSE_TYPE_BASE = 0; // 课程类型：基础课
    final public static Integer COURSE_TYPE_ELECTIVE = 1;  // 课程类型：选修课
    final public static Integer COURSE_TYPE_MAJOR = 2;  // 课程类型：专业课

    final public static Integer TEACH_TYPE_PRIMARY = 0; // 授课方式：普通课
    final public static Integer TEACH_TYPE_PRACTICE = 1;  // 授课方式：实验课

    final public static Integer EXAM_TYPE_OPEN_BOOK = 0; // 考核方式：开卷考试
    final public static Integer EXAM_TYPE_CLOSE_BOOK = 1;  // 考核方式：闭卷考试

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String name;                // 课程名
    Float credit;               // 学分
    Integer totalLessonHour;    // 总课时
    Integer type;               // 课程类型
    Integer teachType;          // 授课方式
    Integer examType;           // 考核方式

    @JsonView({CourseJsonView.getAll.class})
    @ManyToMany(fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    List<Major> majorList;       // 对应的专业
}
