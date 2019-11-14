package com.sixgod.teachPlan.handler;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;

/**
 * @author chenjie
 * @date 2019/11/10 12:37
 */
@Data
@Component
public class JsonErrorResult implements Serializable {
    private static final long serialVersionUID = 5879266441680142389L;
    private String message;
    private String method;
    private String url;

    public JsonErrorResult() {
    }

    public JsonErrorResult(HttpServletRequest httpServletRequest, Exception exception) {
        this.setMethod(httpServletRequest.getMethod());
        this.setUrl(httpServletRequest.getRequestURL().toString());
        this.setMessage(exception.getMessage());
    }

    public JsonErrorResult(HttpServletRequest httpServletRequest, String message) {
        this.setMethod(httpServletRequest.getMethod());
        this.setUrl(httpServletRequest.getRequestURL().toString());
        this.setMessage(message);
    }
}
