package com.sixgod.teachPlan.repository;

import com.sixgod.teachPlan.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author chenjie
 * @date 2019/10/18 17:07
 */
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * 用户名是否存在
     * @param userName
     * @return boolean
     */
    boolean existsByUserName(String userName);

    /**
     * 根据用户名查询用户
     * @param userName
     * @return
     */
    User findByUserName(String userName);

    Page<User> findByUserNameLike(String s, Pageable pageable);
}
