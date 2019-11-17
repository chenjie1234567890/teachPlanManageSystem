package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MajorService {
    /**
     * 根据专业名查询专业分页信息
     */
    Page<Major> findAllByName(String name, Pageable pageable);
    /**
     * 新增
     */
    void add(Major major);

    /**
     * 更新
     */
    void update(Long id, Major major);

    /**
     * 删除
     */
    void deleteById(Long id);

    /**
     * 获取一个未保存的专业
     */
    Major getOneMajor();

    /**
     * 获取一个保存的专业
     */

    Major getOneSavedMajor();

    /**
     * 根据id获取专业
     */
    Major findById(Long id);

//    /**
//     * 获取所有专业
//     */
//    List<Major> getAllMajor();
//
//    /**
//     * 校验专业名是否存在
//     */
//    Boolean existByName(String name);
}
