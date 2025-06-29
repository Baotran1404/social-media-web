package com.tran.social_media.service;

import com.tran.social_media.models.Comment;

public interface CommentService {
    public Comment createComment(Comment comment,
            Integer userId,
            Integer postId) throws Exception;

    public Comment findCommentById(Integer commentId) throws Exception;
    public Comment likeComments(Integer commentId, Integer userId) throws Exception;




}
