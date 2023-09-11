package com.users.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.users.login.dto.LoginDTO;
import com.users.login.dto.UserDTO;
import com.users.login.entity.UserEntity;
import com.users.login.repository.UserRepository;
import com.users.login.response.LoginResponse;

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


	public LoginResponse loginUser(LoginDTO loginDTO) {
		String msg = "";
		
        UserEntity user = userRepo.findByEmail(loginDTO.getEmail());
        if (user != null) {
            String password = loginDTO.getPassword();
            String storedPassword = user.getPassword();
            
            Boolean isPwdRight = password.equals(storedPassword);
            
            if (isPwdRight) {
                Optional<UserEntity> employee = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), storedPassword);
                
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } 
                else {
                    return new LoginResponse("Login Failed", false);
                }
            } 
            else {
                return new LoginResponse("password does not Match", false);
            }
        }
        else {
            return new LoginResponse("Email does not exists", false);
        }
	}
}