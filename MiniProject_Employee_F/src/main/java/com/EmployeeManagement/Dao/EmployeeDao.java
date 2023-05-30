package com.EmployeeManagement.Dao;

import com.EmployeeManagement.exception.EmployeeNotFoundException;
import com.EmployeeManagement.model.Employee;

public interface EmployeeDao {

	public Employee findByEmailId(String emailId) throws EmployeeNotFoundException;
}
