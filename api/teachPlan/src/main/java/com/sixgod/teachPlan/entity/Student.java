package com.sixgod.teachPlan.entity;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.jsonView.NoneJsonView;
import com.sixgod.teachPlan.jsonView.StudentJsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author chenjie
 * @date 2019/11/13 9:44
 */
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    Long studentNum;

    @JsonView({StudentJsonView.getAll.class, NoneJsonView.class})
    @ManyToOne
    Major major;

    @JsonView({StudentJsonView.getAll.class, NoneJsonView.class})
    @OneToOne
    User user;
}
