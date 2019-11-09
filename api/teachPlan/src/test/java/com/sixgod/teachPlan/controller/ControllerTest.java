package com.sixgod.teachPlan.controller;

import com.alibaba.fastjson.JSONObject;
import com.sixgod.teachPlan.TeachPlanApplication;
import com.sixgod.teachPlan.entity.User;
import com.sixgod.teachPlan.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import javax.servlet.http.Cookie;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author chenjie
 * @date 2019/10/23 21:27
 */
@Slf4j
@AutoConfigureMockMvc
public class ControllerTest extends TeachPlanApplication {
//    @Autowired
//    MockMvc mockMvc;
//    @Autowired
//    UserService userService;
//    protected Cookie cookie;
//
//    @Before
//    public void getCookie() throws Exception {
//        log.info("用户登录");
//        User user = userService.getOneSavedUser();
//        JSONObject jsonObject = new JSONObject();
//        jsonObject.put("username", user.getUserName());
//        jsonObject.put("password", user.getPassword());
//
//        String loginUrl =  "/user/login";
//        MvcResult mvcResult = this.mockMvc
//                .perform(post(loginUrl)
//                        .contentType(MediaType.APPLICATION_JSON_UTF8)
//                        .content(jsonObject.toJSONString()))
//                .andExpect(status().isOk())
//                .andReturn();
//
//        log.info("获取cookie");
//        this.cookie = mvcResult.getResponse().getCookie("SESSION");
//    }
}
