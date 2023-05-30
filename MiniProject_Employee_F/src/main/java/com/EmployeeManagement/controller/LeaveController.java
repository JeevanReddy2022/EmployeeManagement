package com.EmployeeManagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagement.exception.ResourceNotFoundException;
import com.EmployeeManagement.model.Employee;
import com.EmployeeManagement.model.Leave;
import com.EmployeeManagement.model.LeaveStatus;
import com.EmployeeManagement.repository.LeaveRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class LeaveController {
	
	@Autowired
	private LeaveRepository leaveRepository;
	
	//get all employees
		@GetMapping("/leave")
		public List<Leave>getAllLeave(){
			return leaveRepository.findAll();
		}
		
		//create leave rest api
		@PostMapping("/leave")	
         public Leave createLeave(@RequestBody Leave leave) {
			leave.setLeaveStatus(LeaveStatus.PENDING);
        	 return leaveRepository.save(leave);
         }
		
		//delete leave rest api
		@DeleteMapping("/leave/{leaveId}")
		public ResponseEntity<Map<String,Boolean>> deleteLeave(@PathVariable Long leaveId){
			Leave leave=leaveRepository.findByLeaveId(leaveId);
			leaveRepository.delete(leave);
			Map<String,Boolean>response=new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

		//get leave details by emailId
		@GetMapping("/leave/emailId/{emailId}")
		public ResponseEntity<?> getLeaveDetailsByEmailId(@PathVariable String emailId){
			List<Leave> leaveObj;
			leaveObj = leaveRepository.findByEmailId(emailId);
			return ResponseEntity.ok(leaveObj);
		}
		
		@GetMapping("/leave/status")
		public ResponseEntity<?> getLeaveDetailsByStatus(){
			List<Leave> leaveObj;
			leaveObj = leaveRepository.findByLeaveStatus(LeaveStatus.PENDING);
			return ResponseEntity.ok(leaveObj);
		}
		
		@GetMapping("/leave/{id}")
		public ResponseEntity<Leave>getcertificationById(@PathVariable Long id){
			Leave leave =leaveRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
			return ResponseEntity.ok(leave);
		}
		
		@PutMapping("/leave/updateStatus/{leaveId}")
		public ResponseEntity<?> updateStatus(@PathVariable Long leaveId, @RequestBody Leave leaveeDetails){
			Leave leave2= leaveRepository.findByLeaveId(leaveId);
//			for(int i=0; i<leaveObj1.size(); i++) {
//				Leave leave2 = leaveObj1.get(0);
				leave2.setEmailId(leaveeDetails.getEmailId());
				leave2.setFromDate(leaveeDetails.getFromDate());
				leave2.setToDate(leaveeDetails.getToDate());
				leave2.setLeaveStatus(leaveeDetails.getLeaveStatus());
				leave2.setLeaveType(leaveeDetails.getLeaveType());
//				leave2.set
				Leave leave=leaveRepository.save(leave2);
//			}
			
			return ResponseEntity.ok(leave);
		}
}