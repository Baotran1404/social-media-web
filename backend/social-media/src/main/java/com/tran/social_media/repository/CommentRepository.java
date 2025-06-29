package com.tran.social_media.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tran.social_media.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    // Additional methods specific to Comment can be added here if needed
    
}
