package com.sixgod.teachPlan.entity;

/** 返回给前台的消息格式
 * @author chenjie
 * @date 2019/10/18 18:12
 */
public class ResInfo<T> {
    private Boolean status = true;
    private String message = "成功";
    private T data;

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
