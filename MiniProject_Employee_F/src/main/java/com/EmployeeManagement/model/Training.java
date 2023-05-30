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
@Table(name = "Trainings")
public class Training {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long trainId;
	
	private String trainingName;
	
	private String emailId;
	
	private LocalDate startDate;
	private LocalDate endDate;
	
	@Enumerated(EnumType.STRING)
	private TrainingStatus trainingStatus;

	public Long getTrainId() {
		return trainId;
	}

	public void setTrainId(Long trainId) {
		this.trainId = trainId;
	}

	public String getTrainingName() {
		return trainingName;
	}

	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public TrainingStatus getTrainingStatus() {
		return trainingStatus;
	}

	public void setTrainingStatus(TrainingStatus trainingStatus) {
		this.trainingStatus = trainingStatus;
	}

	@Override
	public String toString() {
		return "Training [trainId=" + trainId + ", trainingName=" + trainingName + ", emailId=" + emailId
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", trainingStatus=" + trainingStatus + "]";
	}

	public Training(String trainingName, String emailId, LocalDate startDate, LocalDate endDate,
			TrainingStatus trainingStatus) {
		
		this.trainingName = trainingName;
		this.emailId = emailId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.trainingStatus = trainingStatus;
	}

	public Training() {

	}


	
}
