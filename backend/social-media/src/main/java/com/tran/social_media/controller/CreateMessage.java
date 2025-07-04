package com.tran.social_media.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.tran.social_media.models.Message;
import com.tran.social_media.models.User;
import com.tran.social_media.service.MessageService;
import com.tran.social_media.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class CreateMessage {

    @Autowired
    private MessageService message;

    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;

    @PostMapping("/api/messages/chat/{chatId}")

    public Message createMessage(@RequestBody Message req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Integer chatId) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Message message = messageService.createMessage(user, 
        chatId, req);

        return message;
    }

    @GetMapping("/api/messages/chat/{chatId}")
    public List<Message> findChatsMessage(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Integer chatId) throws Exception {
        User user = userService.findUserByJwt(jwt);
        List<Message> message = messageService.findChatsMessages(chatId);
        return message;
    }

}
