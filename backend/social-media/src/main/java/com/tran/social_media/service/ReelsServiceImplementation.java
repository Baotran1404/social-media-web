package com.tran.social_media.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tran.social_media.models.Reels;
import com.tran.social_media.models.User;
import com.tran.social_media.repository.ReelsRepository;

@Service
public class ReelsServiceImplementation implements ReelsService {

    @Autowired
    private ReelsRepository reelsRepository;

    @Autowired
    private UserService userService;

    @Override
    public Reels createReel(Reels reel, User user) {

        Reels createReel = new Reels();

        createReel.setTitle(reel.getTitle());
        createReel.setVideo(reel.getVideo());

        createReel.setUser(user);

        return reelsRepository.save(createReel);
    }

    @Override
    public List<Reels> findAllReels() {

        return reelsRepository.findAll();
    }

    @Override
    public List<Reels> findUserReels(Integer userId) throws Exception {

        userService.findUserById(userId);
        return reelsRepository.findByUserId(userId);
    }

}
