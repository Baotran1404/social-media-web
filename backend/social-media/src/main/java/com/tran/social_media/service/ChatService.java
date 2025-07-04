package com.tran.social_media.service;

import java.util.List;

import com.tran.social_media.models.Chat;
import com.tran.social_media.models.User;

public interface ChatService {

    public Chat createChat(User reqUser, User user2);

    public Chat findChatById(Integer chatId) throws Exception;

    public List<Chat> findUsersChat(Integer userId) ;
    
}
