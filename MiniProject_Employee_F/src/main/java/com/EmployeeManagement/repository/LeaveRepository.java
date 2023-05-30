package com.EmployeeManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.EmployeeManagement.model.Leave;
import com.EmployeeManagement.model.LeaveStatus;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long>{

	public Leave findByLeaveId(Long leaveId);
    public List<Leave> findByEmailId(String EmailId);
//    public List<Leave> findByL(String leaveStatus);
    public List<Leave> findByLeaveStatus(LeaveStatus PENDING);
    //public Leave updateLeaveStatusByEmailId(String emailId, Leave leaveDetails);
	//public List<Leave> findByStatus(String status);
}

