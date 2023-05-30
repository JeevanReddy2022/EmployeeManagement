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
import com.EmployeeManagement.repository.CertificationRepository;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class CertificationController {

	  @Autowired
	  private CertificationRepository certificationRepository;

	  @GetMapping("/certification")
		public List<Certification>getAllCertification(){
			return certificationRepository.findAll();
		}
		
		//create leave rest api
		@PostMapping("/certification")	
       public Certification createCertification(@RequestBody Certification certification) {
			certification.setStatus(Status.PENDING);
      	 return certificationRepository.save(certification);
       }
		

		//get leave details by emailId
		@GetMapping("/certification/emailId/{emailId}")
		public ResponseEntity<?> getCertificationDetailsByEmailId(@PathVariable String emailId){
			List<Certification> certificationObj;
			certificationObj = certificationRepository.findByEmailId(emailId);
			return ResponseEntity.ok(certificationObj);
		}
		
		@GetMapping("/certification/status")
		public ResponseEntity<?> getCertificationDetailsByStatus(){
			List<Certification> certificationObj;
			certificationObj = certificationRepository.findByStatus(Status.PENDING);
			return ResponseEntity.ok(certificationObj);
		}
		
		@GetMapping("/certification/{id}")
		public ResponseEntity<Certification>getcertificationById(@PathVariable Long id){
			Certification certification =certificationRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
			return ResponseEntity.ok(certification);
		}
		
		@PutMapping("/certification/updateStatus/{certId}")
		public ResponseEntity<?> updateStatus(@PathVariable Long certId, @RequestBody Certification certificationDetails){
			Certification certification2= certificationRepository.findByCertId(certId);
			certification2.setEmailId(certificationDetails.getEmailId());
			certification2.setName(certificationDetails.getName());
			certification2.setIssueDate(certificationDetails.getIssueDate());
			certification2.setExpiryDate(certificationDetails.getExpiryDate());
			certification2.setStatus(certificationDetails.getStatus());
//				leave2.set
			Certification certification=certificationRepository.save(certification2);
//			}
			
			return ResponseEntity.ok(certification);
		}
}