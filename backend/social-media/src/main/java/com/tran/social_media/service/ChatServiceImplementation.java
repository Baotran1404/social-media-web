package com.tran.social_media.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tran.social_media.models.Chat;
import com.tran.social_media.models.User;
import com.tran.social_media.repository.ChatRepository;

@Service
public class ChatServiceImplementation implements ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat createChat(User reqUser, User user2) {
        Chat isExist = chatRepository.findChatByUsersId(user2, reqUser);
        if (isExist != null) {
            return isExist; // Return existing chat if found
        }
        Chat chat = new Chat();
        chat.getUsers().add(user2);
        chat.getUsers().add(reqUser);
        chat.setTimestamp(LocalDateTime.now()); // Set the current timestamp

        return chatRepository.save(chat); // Save and return the new chat
    }

    @Override
    public Chat findChatById(Integer chatId) throws Exception {
        Optional<Chat> opt = chatRepository.findById(chatId);
        if (opt.isEmpty()) {
            throw new Exception("Chat not found with ID: " + chatId);
        }
        
        return opt.get(); // Return the found chat
    }

    @Override
    public List<Chat> findUsersChat(Integer userId) {
        // Implementation logic for finding chats by user ID
        return chatRepository.findByUsers_Id(userId);
    }

}
