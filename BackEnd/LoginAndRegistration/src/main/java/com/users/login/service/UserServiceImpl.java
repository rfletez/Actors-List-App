package com.users.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.users.login.dto.UserDTO;
import com.users.login.entity.UserEntity;
import com.users.login.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;
	


	public String addUser(UserDTO userDTO) {
		UserEntity user = new UserEntity(
				userDTO.getUserID(),
				userDTO.getUserName(),
				userDTO.getEmailID(),
				userDTO.getPassword()
		);
		
		userRepo.save(user);
		
		return user.getUserName();
	}
	
	

}