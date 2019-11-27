package com.sixgod.teachPlan.handler;

/** 全局异常处理
 * https://www.toptal.com/java/spring-boot-rest-api-error-handling
 * @author chenjie
 * @date 2019/11/10 9:46
 */

import com.sixgod.teachPlan.Exception.EntityRepeatException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletRequest;

/**
 * 全局异常处理
 */
@Order(Ordered.HIGHEST_PRECEDENCE)
@RestControllerAdvice     // RestController 增强
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = AuthException.class)
    protected ResponseEntity<JsonErrorResult> handleAuthException(AuthException ex, HttpServletRequest httpServletRequest) {
        log.error("---用户验证验证发生错误：---Host {} invokes url {} ERROR: {}", httpServletRequest.getRemoteHost(), httpServletRequest.getRequestURL(), ex.getMessage());
        return new ResponseEntity<>(new JsonErrorResult(httpServletRequest, ex), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(value = EntityNotFoundException.class)
    protected ResponseEntity<JsonErrorResult> handleEntityNotFoundException(EntityNotFoundException ex, HttpServletRequest httpServletRequest) {
        log.error("---发生实体未找到错误：---Host {} invokes url {} ERROR: {}", httpServletRequest.getRemoteHost(), httpServletRequest.getRequestURL(), ex.getMessage());
        return new ResponseEntity<>(new JsonErrorResult(httpServletRequest, ex), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(value = EntityRepeatException.class)
    protected ResponseEntity<JsonErrorResult> handleTeachPlanExistException(EntityRepeatException ex, HttpServletRequest httpServletRequest) {
        log.error("---发生教学计划添加重复错误：---Host {} invokes url {} ERROR: {}", httpServletRequest.getRemoteHost(), httpServletRequest.getRequestURL(), ex.getMessage());
        return new ResponseEntity<>(new JsonErrorResult(httpServletRequest, ex), HttpStatus.METHOD_NOT_ALLOWED);
    }
}

