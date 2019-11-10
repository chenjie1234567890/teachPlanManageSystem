package com.sixgod.teachPlan.handler;

/**
 * @author chenjie
 * @date 2019/11/10 9:46
 */

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.security.auth.message.AuthException;
import java.nio.file.AccessDeniedException;

/**
 * 全局异常处理
 */
@RestControllerAdvice     // RestController 增强
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(value = AuthException.class)
    public
}

