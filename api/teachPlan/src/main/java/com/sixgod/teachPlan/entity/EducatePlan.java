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


    String teamNumber;  // 学年，例如第一学年，第二学年

    @OneToOne
    Major major;

    @ManyToMany
    List<Course> courseList;
}
