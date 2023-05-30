import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-certificate',
  templateUrl: './apply-certificate.component.html',
  styleUrls: ['./apply-certificate.component.css']
})
export class ApplyCertificateComponent implements OnInit{

  submitted=false;
  certification :Certification = new Certification();
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

  ngOnInit(): void {
    
  }

  constructor(private certificationService:CertificationService, private router:Router) { }

  certificateTypes: string[] = ['AWS', 'SpringBoot', 'Angular','DevOps','Excel','Azure'];
  selectedcertificateType: string;
  expiryDate: string;
  issueDate: string;
  errorMessage: string;
  message: string;

  saveCertificate(){
    this.certificationService.createCertication(this.certification).subscribe(
      data => {
        console.log(data);
        this.goToEmployee();
      },
      error => console.log(error)
    );
   }

   goToEmployee(){
    this.router.navigate(['/employee']);
   }

  submitForm(): void {

    this.submitted = true;

    // Handle form submission logic here
    if (!this.selectedcertificateType || !this.expiryDate || !this.issueDate) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
  
    // Clear error message 
    this.errorMessage = '';

    alert('Certificate applied successfully');
    this.certification.emailId=this.employeeEmailId;
    
    console.log(this.certification);
    this.saveCertificate();
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
