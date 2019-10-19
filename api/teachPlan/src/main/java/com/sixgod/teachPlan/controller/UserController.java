package com.sixgod.teachPlan.controller;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/** 用户控制器
 * @author chenjie
 * @date 2019/10/18 17:14
 */
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResInfo<User> register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public ResInfo<User> login(@RequestBody User user) {
        return userService.login(user);
    }
}
