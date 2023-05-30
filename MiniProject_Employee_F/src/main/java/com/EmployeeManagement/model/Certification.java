package com.EmployeeManagement.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "certificates")
public class Certification {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long certId;
	
	private String name;
	
	private String emailId;
	
	private LocalDate issueDate;
	private LocalDate expiryDate;
	
	@Enumerated(EnumType.STRING)
	private Status status;

	public Long getCertId() {
		return certId;
	}

	public void setCertId(Long certId) {
		this.certId = certId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(LocalDate issueDate) {
		this.issueDate = issueDate;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Certification(String name, String emailId, LocalDate issueDate, LocalDate expiryDate, Status status) {

		this.name = name;
		this.emailId = emailId;
		this.issueDate = issueDate;
		this.expiryDate = expiryDate;
		this.status = status;
	}

	public Certification() {
		
	}

	@Override
	public String toString() {
		return "Certification [certId=" + certId + ", name=" + name + ", emailId=" + emailId + ", issueDate=" + issueDate
				+ ", expiryDate=" + expiryDate + ", status=" + status + "]";
	}

	

}

