package com.sixgod.teachPlan.service.impl;

import com.sixgod.teachPlan.entity.Student;
import com.sixgod.teachPlan.entity.Teacher;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.repository.StudentRepository;
import com.sixgod.teachPlan.repository.TeacherRepository;
import com.sixgod.teachPlan.repository.UserRepository;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.math.RandomUtils;
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

    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;
    private final HttpSession httpSession;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           TeacherRepository teacherRepository,
                           StudentRepository studentRepository,
                           HttpSession httpSession) {
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
        this.studentRepository = studentRepository;
        this.httpSession = httpSession;
    }

    @Override
    public User register(User user) throws AuthException {
        if(userRepository.existsByUserName(user.getUserName())) {
            throw new AuthException("注册失败,用户名已存在");
        } else {
            // 持久化用户
            User persistUser = userRepository.save(user);
            // 如果注册的是学生，则新建学生实体
            if (user.getRole().equals(User.ROLE_STUDENT)) {
                Student student = new Student();
                student.setUser(persistUser);
                studentRepository.save(student);
            } else if(user.getRole().equals(User.ROLE_TEACHER)){
                Teacher teacher = new Teacher();
                teacher.setUser(persistUser);
                teacherRepository.save(teacher);
            } else {
                throw  new AuthException("注册失败， 请选择角色");
            }
            return persistUser;
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
      return User.builder()
                        .userName(RandomStringUtils.randomAlphanumeric(5))
                        .password(RandomStringUtils.randomAlphanumeric(8))
                        .role(RandomUtils.nextInt(2))
                        .build();
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

    @Override
    public Boolean existByUserName(String userName) {
        User user = userRepository.findByUserName(userName);
        if(user == null){
            return false;
        }
        else{
            return true;
        }
    }
}
