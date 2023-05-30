package com.EmployeeManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagement.exception.ResourceNotFoundException;
import com.EmployeeManagement.model.Certification;
import com.EmployeeManagement.model.Status;
import com.EmployeeManagement.model.Training;
import com.EmployeeManagement.model.TrainingStatus;
import com.EmployeeManagement.repository.CertificationRepository;
import com.EmployeeManagement.repository.TrainingRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class TrainingController {
	
	 @Autowired
	  private TrainingRepository trainingRepository;

	  @GetMapping("/training")
		public List<Training>getAllTraining(){
			return trainingRepository.findAll();
		}
		
		//create leave rest api
		@PostMapping("/training")	
      public Training createTraining(@RequestBody Training training) {
			training.setTrainingStatus(TrainingStatus.COMPLETED);
     	 return trainingRepository.save(training);
      }
		

		//get leave details by emailId
		@GetMapping("/training/emailId/{emailId}")
		public ResponseEntity<?> getTrainingDetailsByEmailId(@PathVariable String emailId){
			List<Training> TrainingObj;
			TrainingObj = trainingRepository.findByEmailId(emailId);
			return ResponseEntity.ok(TrainingObj);
		}
		
		@GetMapping("/training/status")
		public ResponseEntity<?> getTrainingDetailsByStatus(){
			List<Training> TrainingObj;
			TrainingObj = trainingRepository.findByTrainingStatus(TrainingStatus.COMPLETED);
			return ResponseEntity.ok(TrainingObj);
		}

		@GetMapping("/training/{id}")
		public ResponseEntity<Training>getcertificationById(@PathVariable Long id){
			Training training =trainingRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
			return ResponseEntity.ok(training);
		}
		
		@PutMapping("/training/updateStatus/{trainId}")
		public ResponseEntity<?> updateStatus(@PathVariable Long trainId, @RequestBody Training trainingDetails){
			Training training2= trainingRepository.findByTrainId(trainId);
			training2.setEmailId(trainingDetails.getEmailId());
			training2.setTrainingName(trainingDetails.getTrainingName());
			training2.setStartDate(trainingDetails.getStartDate());
			training2.setEndDate(trainingDetails.getEndDate());
			training2.setTrainingStatus(trainingDetails.getTrainingStatus());
//			
			Training training=trainingRepository.save(training2);
//			}
			
			return ResponseEntity.ok(training);
		}
}

