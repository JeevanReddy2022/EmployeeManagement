package com.EmployeeManagement;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

import com.EmployeeManagement.model.Attendance;
import com.EmployeeManagement.model.Certification;
import com.EmployeeManagement.model.Employee;
import com.EmployeeManagement.model.Leave;
import com.EmployeeManagement.model.Training;

@SpringBootTest
public class EmployeeManagementTest {
	
	@Test
	void testGetEmployee() {
		RestTemplate restTemplate = new RestTemplate();
		Employee employee = restTemplate.getForObject("http://localhost:8080/api/v1/employees/1", Employee.class);
		assertNotNull(employee);
	}
	@Test
	void testGetAttendance() {
		RestTemplate restTemplate = new RestTemplate();
		Attendance attendance = restTemplate.getForObject("http://localhost:8080/api/v1/attendance/1", Attendance.class);
		assertNotNull(attendance);
	}	
	@Test
	void testGetCertification() {
		RestTemplate restTemplate = new RestTemplate();
		Certification certification = restTemplate.getForObject("http://localhost:8080/api/v1/certification/1", Certification.class);
		assertNotNull(certification);
	}	
	@Test
	void testGetLeave() {
		RestTemplate restTemplate = new RestTemplate();
		Leave leave = restTemplate.getForObject("http://localhost:8080/api/v1/leave/1", Leave.class);
		assertNotNull(leave);
	}
	@Test
	void testGetTraining() {
		RestTemplate restTemplate = new RestTemplate();
		Training training = restTemplate.getForObject("http://localhost:8080/api/v1/training/1", Training.class);
		assertNotNull(training);
	}
	
	
	
	
}
