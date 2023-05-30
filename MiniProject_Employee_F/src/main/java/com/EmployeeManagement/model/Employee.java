package com.EmployeeManagement.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="first_name")
	private String firstname;
	
	@Column(name="last_name")
	private String lastname;
	
	@Column(name="email_id")
	private String emailId;
	
	private LocalDate dob;
	
	private long mobileNum;
	
	private String location;
	
	private LocalDate doj;

	private String managerName;
	
private String password;


public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getFirstname() {
	return firstname;
}

public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public String getEmailId() {
	return emailId;
}

public void setEmailId(String emailId) {
	this.emailId = emailId;
}

public LocalDate getDob() {
	return dob;
}

public void setDob(LocalDate dob) {
	this.dob = dob;
}

public long getMobileNum() {
	return mobileNum;
}

public void setMobileNum(long mobileNum) {
	this.mobileNum = mobileNum;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public LocalDate getDoj() {
	return doj;
}

public void setDoj(LocalDate doj) {
	this.doj = doj;
}

public String getManagerName() {
	return managerName;
}

public void setManagerName(String managerName) {
	this.managerName = managerName;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}



	
}