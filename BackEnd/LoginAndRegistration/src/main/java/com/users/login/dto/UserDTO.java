package com.users.login.dto;


public class UserDTO {
	
	private int userID;
	private String user_name;
	private String email;
	private String password;

	
	public UserDTO() {}

	public UserDTO(int userID, String userName, String email, String password) {
		super();
		this.userID = userID;
		this.user_name = userName;
		this.email = email;
		this.password = password;
	}
	

	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
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
	public void setEmailID(String emailID) {
		this.email = emailID;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserDTO [userID=" + userID + ", userName=" + user_name + ", emailID=" + email + ", password="
				+ password + "]";
	}
}