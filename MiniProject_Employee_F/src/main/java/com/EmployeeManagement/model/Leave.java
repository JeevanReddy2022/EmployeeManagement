package com.EmployeeManagement.model;


import java.time.LocalDate;
import java.util.Objects;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Leaves_Request")
public class Leave {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leaveId;
	private String emailId;
	private LocalDate fromDate;
	private LocalDate toDate;
	
	@Enumerated(EnumType.STRING)
	private LeaveType leaveType;
	
	@Enumerated(EnumType.STRING)
	private LeaveStatus leaveStatus;

	public Long getLeaveId() {
		return leaveId;
	}

	public void setLeaveId(Long leaveId) {
		this.leaveId = leaveId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getFromDate() {
		return fromDate;
	}

	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}

	public LocalDate getToDate() {
		return toDate;
	}

	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}

	public LeaveType getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(LeaveType leaveType) {
		this.leaveType = leaveType;
	}

	public LeaveStatus getLeaveStatus() {
		return leaveStatus;
	}

	public void setLeaveStatus(LeaveStatus leaveStatus) {
		this.leaveStatus = leaveStatus;
	}

	@Override
	public String toString() {
		return "Leave [leaveId=" + leaveId + ", emailId=" + emailId + ", fromDate=" + fromDate + ", toDate=" + toDate
				+ ", leaveType=" + leaveType + ", leaveStatus=" + leaveStatus + "]";
	}

	public Leave(Long leaveId, String emailId, LocalDate fromDate, LocalDate toDate, LeaveType leaveType,
			LeaveStatus leaveStatus) {
		this.leaveId = leaveId;
		this.emailId = emailId;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.leaveType = leaveType;
		this.leaveStatus = leaveStatus;
	}

	public Leave() {

	}

	

}