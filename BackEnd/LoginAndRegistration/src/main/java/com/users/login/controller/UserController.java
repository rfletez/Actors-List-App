package com.users.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.users.login.dto.LoginDTO;
import com.users.login.dto.UserDTO;
import com.users.login.response.LoginResponse;
import com.users.login.service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/save")
	public String saveUser(@Valid @RequestBody UserDTO userDTO) {
		String id = userService.addUser(userDTO);
		return id;
	}
	
	@PostMapping(path = "/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginMessage = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginMessage);
	}

}