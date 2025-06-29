package com.tran.social_media.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tran.social_media.models.Chat;
import com.tran.social_media.models.User;

public interface ChatRepository extends JpaRepository<Chat, Integer> {

   List<Chat> findByUsers_Id(Integer userId);

    @Query("SELECT c FROM Chat c WHERE :user Member of c.users And :reqUser Member of  c.users")
    public Chat findChatByUsersId(
            @Param("user") User user,
            @Param("reqUser") User reqUser);

}
