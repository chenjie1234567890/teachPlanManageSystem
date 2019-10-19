package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.ResInfo;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.UserRepository;
import com.sixgod.teachPlan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author chenjie
 * @date 2019/10/18 17:17
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

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
        } else {
            userResInfo.setStatus(false);
            userResInfo.setMessage("用户名或密码不正确");
        }
        return userResInfo;
    }
}
