package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.assertj.core.api.Assertions.assertThat;
import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpSession;

@Slf4j
class UserServiceImplTest extends ServiceTest {
    @Autowired
    private UserService userService;
    @Autowired
    private HttpSession httpSession;

    @Test
    void register() {
        Boolean isException = false;
        log.info("获取一个随机用户");
        User newUser = userService.getOneUser();

        log.info("此用户注册");
        try {
            userService.register(newUser);
        } catch (AuthException e) {
            isException = true;
        }
        log.info("断言无异常");
        assertThat(isException).isFalse();
        log.info("再使用此用户注册");
        try {
            userService.register(newUser);
        } catch (AuthException e){
            isException = true;
        }
        log.info("断言异常");
        assertThat(isException).isTrue();
    }

    @Test
    void login() {
        log.info("持久化一个用户");
        User user = userService.getOneSavedUser();
        Boolean isException = false;

        log.info("用户名不存在");
        User testUser = userService.getOneUser();
        try {
            userService.login(testUser);
        } catch (AuthException e) {
            isException = true;
        }
        log.info("断言异常");
        assertThat(isException).isTrue();
        isException = false;

        log.info("密码不正确");
        testUser.setUserName(user.getUserName());
        testUser.setPassword(RandomStringUtils.randomAlphanumeric(5));
        try {
            userService.login(testUser);
        } catch (AuthException e) {
            isException = true;
        }
        assertThat(isException).isTrue();
        isException = false;

        log.info("用户名密码都正确");
        testUser.setPassword(user.getPassword());
        try {
            userService.login(testUser);
        } catch (AuthException e) {
            isException = true;
        }
        assertThat(isException).isFalse();
        assertThat(testUser.getId()).isNotNull();
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        assertThat(userId).isNotNull();
        assertThat(userId).isNotEqualTo(0L);
        assertThat(userId).isEqualTo(testUser.getId());
    }

    @Test
    void logout() throws Exception {
        log.info("直接注销，断言异常");
        boolean isException = false;
        try {
            userService.logout();
        } catch (AuthException e) {
            isException = true;
        }
        assertThat(isException).isTrue();
        isException = false;

        log.info("登录");
        User user = userService.getOneSavedUser();
        userService.login(user);
        User currentLoginUser = userService.getCurrentLoginUser();
        assertThat(currentLoginUser.getId()).isEqualTo(user.getId());

        log.info("注销");
        try {
            userService.logout();
        } catch (AuthException e) {
            isException = true;
        }
        assertThat(isException).isFalse();
    }

    @Test
    void getCurrentLoginUser() throws Exception {
        User user = userService.getOneSavedUser();
        User loginUser = new User();
        loginUser.setUserName(user.getUserName());
        loginUser.setPassword(user.getPassword());
        userService.login(loginUser);

        loginUser = userService.getCurrentLoginUser();
        assertThat(loginUser.getId()).isEqualTo(user.getId());
    }
}