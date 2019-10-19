package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;

/**
 * 用户服务
 */
public interface UserService {
    /**
    * @Description 注册
    * @Param User user
    * @Return User
    * @Author chenjie
    * @Date 2019/10/18
    */
    ResInfo<User> register(User user);

    /**
     * 登陆
     * @param user
     * @return ResInfo
     */
    ResInfo<User> login(User user);
}
