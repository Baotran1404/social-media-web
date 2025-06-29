package com.tran.social_media.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tran.social_media.models.Reels;

public interface ReelsRepository  extends JpaRepository<Reels, Integer> {


    public List<Reels> findByUserId(Integer userId);

    
}
