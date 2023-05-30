import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';

@Component({
  selector: 'app-approve-reject-certificate',
  templateUrl: './approve-reject-certificate.component.html',
  styleUrls: ['./approve-reject-certificate.component.css']
})
export class ApproveRejectCertificateComponent implements OnInit{

  constructor(private certificationService: CertificationService){ }
  certification: Certification = new Certification();
  public certificates;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");
  public certId;
  public name;
  public issueDate;
  public expiryDate;
  public status;

  ngOnInit(): void {
    this.getCertificateDetails();
  }

  getCertificateDetails(){
    this.certificationService.getAllCertificationDetailsByStatus().subscribe(
      data => {
        this.certificates = data;
        console.log(data);
      },
      (error:HttpErrorResponse)=>{
        this.certificates = [];
      }
    )
  }

  approveCertificate(emailId,issueDate,expiryDate,name,certId){
    this.certification.emailId=emailId;
    this.certification.issueDate=issueDate;
    this.certification.expiryDate=expiryDate;
    this.certification.name=name;
    this.certification.certId=certId;
    this.certification.status="APPROVED";
    this.certificationService.updateCertificationStatus(certId, this.certification).subscribe(
      data=>{
        alert("Certificate Approved Successfully")
        this.getCertificateDetails();
      },
      (error:HttpErrorResponse)=>{
        alert("Error in approving certificate")
      }
    )
  }

  rejectCertificate(emailId,issueDate,expiryDate,name,certId){
    this.certification.emailId=emailId;
    this.certification.issueDate=issueDate;
    this.certification.expiryDate=expiryDate;
    this.certification.name=name;
    this.certification.certId=certId;
    this.certification.status="DENIED";
    this.certificationService.updateCertificationStatus(certId, this.certification).subscribe(
      data=>{
        alert("Certificate Rejected Successfully")
        this.getCertificateDetails();
      },
      (error:HttpErrorResponse)=>{
        alert("Error in approving certificate")
      }
    )
  }
  
}
