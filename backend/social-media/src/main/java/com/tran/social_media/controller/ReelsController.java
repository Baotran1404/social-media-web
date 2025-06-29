package com.tran.social_media.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.tran.social_media.models.Reels;
import com.tran.social_media.models.User;
import com.tran.social_media.service.ReelsService;
import com.tran.social_media.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class ReelsController {

    @Autowired
    private ReelsService reelsService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/reels")

    public Reels createReel(@RequestBody Reels reels,
            @RequestHeader("Authorization") String jwt)
            throws Exception {
        User reqUser = userService.findUserByJwt(jwt);

        // Create and return the reel
        Reels createdReels = reelsService.createReel(reels, reqUser);
        return createdReels;
    }

    @GetMapping("/api/reels")
    public List<Reels> findAllReels() {
        List<Reels> reels = reelsService.findAllReels();
        return reels;
    }

    @GetMapping("/api/reels/user/{userId}")
    public List<Reels> findUserReels(@PathVariable Integer userId,
            @RequestHeader("Authorization") String jwt)
            throws Exception {
        List<Reels> reels = reelsService.findUserReels(userId);

        return reels;
    }
}
