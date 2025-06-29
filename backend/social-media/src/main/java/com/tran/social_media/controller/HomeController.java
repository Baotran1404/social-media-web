package com.tran.social_media.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class HomeController {

    @GetMapping 
    public String homeControllerHandler(){
        return "This is home controller";
    }


    
}
