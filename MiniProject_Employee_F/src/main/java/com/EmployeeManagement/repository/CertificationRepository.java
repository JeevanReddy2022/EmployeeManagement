package com.EmployeeManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.EmployeeManagement.model.Certification;
import com.EmployeeManagement.model.Status;

@Repository
public interface CertificationRepository extends JpaRepository<Certification, Long> {
	public Certification findByCertId(Long certId);
    public List<Certification> findByEmailId(String EmailId);
    public List<Certification> findByStatus(Status PENDING);

}
