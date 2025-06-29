package com.tran.social_media.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.tran.social_media.models.Comment;
import com.tran.social_media.models.User;
import com.tran.social_media.service.CommentService;
import com.tran.social_media.service.UserService;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/comments/posts/{postId}")
    public Comment createComment(@RequestBody Comment comment,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Integer postId) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Comment createdComment = commentService.createComment(comment, 
        user.getId(), 
        postId);

        return createdComment;
    }

    @PutMapping("/api/comments/like/{commentId}")
    public Comment likeComment(@PathVariable ("commentId") Integer commentId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Comment likedComment = commentService.likeComments(commentId, user.getId());

        return likedComment;
    }


}
