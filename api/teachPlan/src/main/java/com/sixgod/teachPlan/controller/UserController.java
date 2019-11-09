package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/** 用户控制器
 * @author chenjie
 * @date 2019/10/18 17:14
 */
@RestController
@RequestMapping("user")
@Slf4j
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResInfo<User> register(@RequestBody User user) {
        log.debug(user.getUserName() + "注册");
        return userService.register(user);
    }

    /**
    * @Description 登录
    * @Param User
    * @Return ResInfo<User>
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/login")
    public ResInfo<User> login(@RequestBody User user) {
        log.debug(user.getUserName() + "登录");
        return userService.login(user);
    }

    /**
    * @Description 注销
    * @Return ResInfo
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/logout")
    public ResInfo logout() {
        return userService.logout();
    }

    /**
     * 获取当前登录用户
     * @return ResInfo<User>
     */
    @GetMapping("/currentLoginUser")
    public ResInfo<User> getCurrentLoginUser() {
        ResInfo<User> userResInfo = new ResInfo<>();
        User user =  userService.getCurrentLoginUser();
        if (user == null) {
            userResInfo.setMessage("获取失败,可能原因:未登录");
            userResInfo.setStatus(false);
        } else {
            userResInfo.setData(user);
        }
        return userResInfo;
    }
}
