package com.tran.social_media.controller;

import org.springframework.web.bind.annotation.RestController;

import com.tran.social_media.exceptions.UserException;
import com.tran.social_media.models.User;
import com.tran.social_media.repository.UserRepository;
import com.tran.social_media.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    UserService userService;

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        User savedUser = userService.registerUser(user);
        return savedUser;

    }

    @GetMapping("/api/users")
    public List<User> getUsers() {
        List<User> users = userRepository.findAll();
        return users;

    }

    @GetMapping("/api/users/{userId}")
    public User getUserById(@PathVariable("userId") Integer id) throws UserException {
        User user = userService.findUserById(id);
        return user;
    }

    @PutMapping("/api/users")
    public User updatedUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws UserException {

        User reqUser = userService.findUserByJwt(jwt);
        User updateUser = userService.updateUser(user, reqUser.getId());
        return updateUser;

    }

    @PutMapping("/api/users/follow/{userId2}")
    public User followUserHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer userId2) throws UserException {
        User reqUser = userService.findUserByJwt(jwt);
        User user = userService.followUser(reqUser.getId(), userId2);
        return user;
    }

    @GetMapping("/api/users/search")
    public List<User> searchUser(@RequestParam("query") String query) {
        List<User> users = userService.searchUser(query);
        return users;
    }

@GetMapping("/api/users/profile")
public User getUserFromToken() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String email = authentication.getPrincipal().toString();

    User user = userService.findUserByEmail(email);  //  Cần có phương thức findUserByEmail()
    user.setPassword(null);
    return user;
}


}
