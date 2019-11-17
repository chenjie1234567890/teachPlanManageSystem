package com.sixgod.teachPlan.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sixgod.teachPlan.interceptor.AuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

/**
 * @author chenjie
 * @date 2019/10/23 20:27
 */
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    //    /**
//     * 注册拦截器
//     */
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(new AuthInterceptor())
//                .excludePathPatterns("/user/login")
//                .excludePathPatterns("/user/register");
//    }

    /**
     * http消息转换
     * 实体不添加jsonView，默认返回
     * 添加，则按view视图规则返回
     * @param converters
     */
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        ObjectMapper mapper = Jackson2ObjectMapperBuilder.json().defaultViewInclusion(true).build();
        converters.add(new MappingJackson2HttpMessageConverter(mapper));
    }
}
