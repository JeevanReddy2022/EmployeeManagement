package com.EmployeeManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.EmployeeManagement.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{


    public List<Employee> findAllByOrderById();

    public Employee findById(int id);

	public Employee findByEmailId(String emailId);
}
