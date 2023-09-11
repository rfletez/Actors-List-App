package com.users.login.service;

import com.users.login.dto.LoginDTO;
import com.users.login.dto.UserDTO;
import com.users.login.response.LoginResponse;


public interface UserService {

	String addUser(UserDTO userDTO);

	LoginResponse loginUser(LoginDTO loginDTO);
	
}