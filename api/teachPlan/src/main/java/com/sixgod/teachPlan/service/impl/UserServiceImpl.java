package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.UserRepository;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpSession;

/**
 * @author chenjie
 * @date 2019/10/18 17:17
 */
@Service
@Slf4j
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HttpSession httpSession;

    @Override
    public ResInfo<User> register(User user) {
        ResInfo<User> userResInfo = new ResInfo<>();
        if(!userRepository.existsByUserName(user.getUserName())) {
            userResInfo.setData(userRepository.save(user));
        } else {
            userResInfo.setStatus(false);
            userResInfo.setMessage("注册失败,用户名已存在");
        }
        return userResInfo;
    }

    @Override
    public ResInfo<User> login(User user) {
        ResInfo<User> userResInfo = new ResInfo<>();
        User existsUser = userRepository.findByUserName(user.getUserName());
        // 当此用户存在并且密码正确
        if (existsUser != null && existsUser.getPassword().equals(user.getPassword())) {
            userResInfo.setData(user);
            log.debug("记录当前用户id");
            httpSession.setAttribute(UserService.USER_ID, existsUser.getId());
            user.setId(existsUser.getId());
        } else {
            userResInfo.setStatus(false);
            userResInfo.setMessage("用户名或密码不正确");
        }
        return userResInfo;
    }

    @Override
    public User getOneUser() {
       User user = User.builder()
                        .userName("test")
                        .password("123456")
                        .role(User.ROLE_STUDENT)
                        .build();
        return user;
    }

    @Override
    public User getOneSavedUser() {
        return userRepository.save(getOneUser());
    }

    @Override
    public ResInfo logout() {
        ResInfo resInfo = new ResInfo<>();
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        if (userId == null) {
            resInfo.setStatus(false);
            resInfo.setMessage("请先登录！");
            return resInfo;
        } else {
            log.debug("清空session");
            httpSession.removeAttribute(UserService.USER_ID);
            return resInfo;
        }
    }

    @Override
    public User getCurrentLoginUser() {
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        return userRepository.findById(userId).orElse(null);
    }


}
