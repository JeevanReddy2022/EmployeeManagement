package com.EmployeeManagement.Dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.EmployeeManagement.exception.EmployeeNotFoundException;
import com.EmployeeManagement.model.Employee;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public class EmployeeDaoImpl implements EmployeeDao{
	
	@Autowired
	private SessionFactory sessionFactory;
	private boolean flag;

	@Override
	public Employee findByEmailId(String emailId) throws EmployeeNotFoundException {
		
		String hql="From Employee where emailId=:email";
		Query query=sessionFactory.openSession().createQuery(hql);
		query.setParameter("email", emailId);
		List<Employee> employeeList = query.list();
		if(employeeList.size()>=1) {
			return employeeList.get(0);
		}
		else {
			throw new EmployeeNotFoundException("Employee Not Found");
		}
	}

}
