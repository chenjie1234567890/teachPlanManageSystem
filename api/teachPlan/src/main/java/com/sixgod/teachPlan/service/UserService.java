package com.sixgod.teachPlan.service;

import com.sixgod.teachPlan.entity.User;
import org.springframework.data.domain.Page;

import javax.security.auth.message.AuthException;

/**
 * 用户服务
 */
public interface UserService {
    String USER_ID = "userId";
    /**
    * @Description 注册
    * @Param User user
    * @Return User
    * @Author chenjie
    * @Date 2019/10/18
    */
    User register(User user) throws AuthException;

    /**
     * 登陆
     * @param user
     * @return ResInfo
     */
    User login(User user) throws AuthException;

    /**
    * @Description 获取一个未持久化的用户
    * @Param User
    * @Author chenjie
    * @Date 2019/10/23
    */
    User getOneUser();
    
    /**
    * @Description 获取一个持久化的用户
    * @Param 
    * @Return 
    * @Author chenjie
    * @Date 2019/10/23
    */
    User getOneSavedUser();

    /**
     * 注销
     * @return
     */
    void logout() throws AuthException;

    /**
     * 获取当前登录用户
     * @return
     */
    User getCurrentLoginUser();

    /**
     * 校验用户名是否存在
     */
    Boolean existByUserName(String userName);
}
