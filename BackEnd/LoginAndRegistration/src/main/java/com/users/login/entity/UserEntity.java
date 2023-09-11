package com.users.login.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="user")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id", length = 45)
	private int user_id;
	
	@Column(name="user_name", length = 255)
	@NotNull(message="Username cannot be null")
	private String user_name;
	
	@Column(name="email", length = 255)
	@NotNull(message="Email Address cannot be null")
	private String email;
	
	@Column(name="password", length = 255)
	@NotNull(message="Password cannot be null")
	private String password;
	
	
	public UserEntity() {}
	
	public UserEntity(int user_id, String userName, String email, String password) {
		super();
		this.user_id = user_id;
		this.user_name = userName;
		this.email = email;
		this.password = password;
	}

	
	public int getUserID() {
		return user_id;
	}
	public void setUserID(int user_id) {
		this.user_id = user_id;
	}

	public String getUserName() {
		return user_name;
	}
	public void setUserName(String userName) {
		this.user_name = userName;
	}
	
	public String getEmailID() {
		return email;
	}
	public void setEmailID(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "UserEntity [userName=" + user_name + ", emailID=" + email + ", password=" + password + "]";
	}
	
}