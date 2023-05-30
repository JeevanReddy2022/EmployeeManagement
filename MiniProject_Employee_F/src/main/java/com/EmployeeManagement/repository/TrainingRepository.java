package com.EmployeeManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EmployeeManagement.model.Certification;
import com.EmployeeManagement.model.Status;
import com.EmployeeManagement.model.Training;
import com.EmployeeManagement.model.TrainingStatus;

public interface TrainingRepository extends JpaRepository<Training, Long> {

	List<Training> findByEmailId(String emailId);

	List<Training> findByTrainingStatus(TrainingStatus inprogress);

	Training findByTrainId(Long trainId);

	

}

