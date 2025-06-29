package com.tran.social_media.service;

import java.util.List;

import com.tran.social_media.models.Story;
import com.tran.social_media.models.User;

public interface StoryService {

    public Story createStory(Story story, User user) ;
    
    public List<Story> findStoryByUserId(Integer userId) throws Exception;
    
}
