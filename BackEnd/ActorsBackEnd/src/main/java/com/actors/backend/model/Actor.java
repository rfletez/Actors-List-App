package com.actors.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table
public class Actor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	@NotNull(message = "First name cannot be null")
	@NotEmpty(message = "First name cannot be empty")
	@Size(min = 3, max = 40, message = "First name must be between 3 and 40 characters long")
	private String firstName;
	
	@Column(name = "last_name")
	@NotNull(message = "Last name cannot be null")
	@NotEmpty(message = "Last name cannot be empty")
	@Size(min = 3, max = 40, message = "Last name must be between 3 and 40 characters long")
	private String lastName;
	
	@Column(name = "email_id")
	@Email
	@NotNull(message = "Email address cannot be null")
	@NotEmpty(message = "Email address cannot be empty")
	private String emailId;
	
	public Actor() {
		/*Default constructors are needed because Hibernate internally uses proxies
		 * to create proxy objects.*/
	}

	public Actor(String firstName, String lastName, String emailId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}