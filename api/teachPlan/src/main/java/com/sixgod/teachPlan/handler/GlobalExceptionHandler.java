package com.sixgod.teachPlan.handler;

/** 全局异常处理
 * https://www.toptal.com/java/spring-boot-rest-api-error-handling
 * @author chenjie
 * @date 2019/11/10 9:46
 */

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.file.AccessDeniedException;

/**
 * 全局异常处理
 */
@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice     // RestController 增强
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = AuthException.class)
    protected ResponseEntity<JsonErrorResult> handleAuthException(AuthException ex, HttpServletRequest httpServletRequest) {
        log.error("---登录验证发生错误：---Host {} invokes url {} ERROR: {}", httpServletRequest.getRemoteHost(), httpServletRequest.getRequestURL(), ex.getMessage());
        return new ResponseEntity<>(new JsonErrorResult(httpServletRequest, ex), HttpStatus.UNAUTHORIZED);
    }
}

