package com.sixgod.teachPlan.interceptor;

import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 拦截器
 * @author chenjie
 * @date 2019/10/23 19:13
 */
@Slf4j
public class AuthInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) {
        log.debug("获取session，判断是否认证登录");
        HttpSession httpSession = request.getSession();
        Long userId = (Long) httpSession.getAttribute(UserService.USER_ID);
        if (userId == null) {
            log.debug("请先登录");
            return false;
        }
        return true;
    }
}
