package com.EmployeeManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagement.exception.ResourceNotFoundException;
import com.EmployeeManagement.model.Attendance;
import com.EmployeeManagement.model.Certification;
import com.EmployeeManagement.model.Status;
import com.EmployeeManagement.repository.AttendanceRepository;
import com.EmployeeManagement.repository.CertificationRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class AttendanceController {
	@Autowired
	  private AttendanceRepository attendanceRepository;

	  @GetMapping("/attendance")
		public List<Attendance>getAllCertification(){
			return attendanceRepository.findAll();
		}
		
	  @PostMapping("/attendance")	
      public Attendance createAttendance(@RequestBody Attendance attendance) {
     	 return attendanceRepository.save(attendance);
      }
	  
	  @GetMapping("/attendance/{id}")
		public ResponseEntity<Attendance>getattendanceById(@PathVariable Long id){
			Attendance attendance =attendanceRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
			return ResponseEntity.ok(attendance);
		}
		

		
		@GetMapping("/attendance/emailId/{emailId}")
		public ResponseEntity<?> getAttendanceDetailsByEmailId(@PathVariable String emailId){
			List<Attendance> attendanceObj;
			attendanceObj = attendanceRepository.findByEmailId(emailId);
			return ResponseEntity.ok(attendanceObj);
		}

}
