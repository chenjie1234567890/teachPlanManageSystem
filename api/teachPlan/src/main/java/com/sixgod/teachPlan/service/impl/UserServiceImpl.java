package com.sixgod.teachPlan.service.impl;

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
    public void register(User user) throws AuthException {
        if(userRepository.existsByUserName(user.getUserName())) {
            throw new AuthException("注册失败,用户名已存在");
        } else {
            userRepository.save(user);
        }
    }

    @Override
    public User login(User user) throws AuthException {
        User existsUser = userRepository.findByUserName(user.getUserName());
        // 当此用户存在并且密码正确
        if (existsUser != null && existsUser.getPassword().equals(user.getPassword())) {
            log.debug("记录当前用户id");
            httpSession.setAttribute(UserService.USER_ID, existsUser.getId());
            user.setId(existsUser.getId());
        } else {
            log.debug("用户名或密码不正确");
            throw new AuthException("用户名或密码不正确");
        }

        return existsUser;
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
    public void logout() throws AuthException {
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        if (userId == null) {
            throw new AuthException("\"请先登录！\"");
        } else {
            log.debug("清空session");
            httpSession.removeAttribute(UserService.USER_ID);
        }
    }

    @Override
    public User getCurrentLoginUser() {
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        return userRepository.findById(userId).orElse(null);
    }

}
