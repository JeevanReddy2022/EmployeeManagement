package com.EmployeeManagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.EmployeeManagement.Dao.EmployeeDao;
import com.EmployeeManagement.exception.EmployeeNotFoundException;
import com.EmployeeManagement.exception.ResourceNotFoundException;
import com.EmployeeManagement.model.Employee;
import com.EmployeeManagement.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class EmployeeController{
	
	@Autowired
	private EmployeeDao dao;
	ResponseEntity<?> response;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee>getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//create employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee>getEmployeeById(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
		return ResponseEntity.ok(employee);
	}
	
	//update employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee>updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Employee not exist with id :" +id));
		employee.setFirstname(employeeDetails.getFirstname());
		employee.setLastname(employeeDetails.getLastname());
		employee.setEmailId(employeeDetails.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
		
	}
	
	//delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteEmployee(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" +id));
		employeeRepository.delete(employee);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
//	//get employee by emailId rest api
//	@GetMapping("employees/emailId/{emailId}")
//	public ResponseEntity<Employee> getUserEmail(@PathVariable String emailId){
//		Employee employeeObj;
//		employeeObj = employeeRepository.findByEmailId(emailId);
//		return ResponseEntity.ok(employeeObj);
//		}
	
	@GetMapping("employees/emailId/{emailId}")
	public ResponseEntity<?> getUserEmail(@PathVariable String emailId){
       Employee employeeObj;
		
			try {
				employeeObj = dao.findByEmailId(emailId);
			} catch (EmployeeNotFoundException e) {
				return new ResponseEntity<String>("Failure",HttpStatus.BAD_REQUEST);		
			}
		
		return ResponseEntity.ok(employeeObj);

	}
}
	

