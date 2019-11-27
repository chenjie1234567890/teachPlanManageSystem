package com.sixgod.teachPlan.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.sixgod.teachPlan.entity.Major;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.jsonView.MajorJsonView;
import com.sixgod.teachPlan.jsonView.UserJsonView;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import javax.security.auth.message.AuthException;

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
    public User register(@RequestBody User user) throws AuthException {
        log.debug(user.getUserName() + "注册");
        return userService.register(user);
    }

    /**
    * @Description 登录
    * @Param User
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/login")
    public User login(@RequestBody User user) throws AuthException {
        log.debug(user.getUserName() + "登录");
        return userService.login(user);
    }

    /**
    * @Description 注销
    * @Author chenjie
    * @Date 2019/10/23
    */
    @PostMapping("/logout")
    public void logout() throws AuthException {
        userService.logout();
    }

    /**
     * 获取当前登录用户
     */
    @GetMapping("/currentLoginUser")
    public User getCurrentLoginUser() throws AuthException {
        User user =  userService.getCurrentLoginUser();
        if (user == null) {
            throw new AuthException("获取当前用户失败,可能原因:未登录");
        }
        return user;
    }

    /**
     * 查询用户姓名是否存在
     * @param username
     * @return
     */
    @GetMapping("/existByUserName")
    public boolean existByUserName(@RequestParam String username){
        return userService.existByUserName(username);
    }

    /**
     * 根据姓名查询所有用户分页信息
     * @param name
     * @param pageable
     * @return Page<Major>
     */
    @JsonView(UserJsonView.getBase.class)
    @GetMapping
    public Page<User> getUserPage(
            @RequestParam(name = "name", required = false, defaultValue = "") String name,
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<User> userPage = userService.findAllByName(name, pageable);
        return userPage;
    }
}
