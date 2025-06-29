package com.tran.social_media.service;

import java.util.List;

import com.tran.social_media.models.Chat;
import com.tran.social_media.models.Message;
import com.tran.social_media.models.User;

public interface MessageService {

    public Message createMessage(User user, Integer chatId, Message req) throws Exception;

    public List<Message> findChatsMessages(Integer chatId) throws Exception;
    
}
