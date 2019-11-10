package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletResponse;

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
    public void register(@RequestBody User user) throws AuthException {
        log.debug(user.getUserName() + "注册");
        userService.register(user);
    }

    /**
    * @Description 登录
    * @Param User
    * @Return ResInfo<User>
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/login")
    public void login(@RequestBody User user, HttpServletResponse response) {
        if (userService.login(user)) {
            log.debug(user.getUserName() + "登录");
        } else {
            response.setStatus(401);
        }
    }

    /**
    * @Description 注销
    * @Return ResInfo
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/logout")
    public void logout() throws AuthException {
        userService.logout();
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
