package com.tran.social_media.service;

import java.util.List;

import com.tran.social_media.models.Reels;
import com.tran.social_media.models.User;

public interface ReelsService {
    public Reels createReel(Reels reels, User reqUser) ;

    public List<Reels> findAllReels();

    public List<Reels> findUserReels(Integer userId) throws Exception;

}
