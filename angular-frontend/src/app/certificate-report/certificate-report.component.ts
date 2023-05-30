import { Component, OnInit } from '@angular/core';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-certificate-report',
  templateUrl: './certificate-report.component.html',
  styleUrls: ['./certificate-report.component.css']
})
export class CertificateReportComponent implements OnInit{
  
  certification: Certification = new Certification();
  public certificates;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

 constructor(private certificationService : CertificationService, private router: Router) { }

  ngOnInit(): void {
    
    this.certificationService.getAllCertificationDetailsByEmailId(this.employeeEmailId).subscribe(
          data => {
          this.certificates = data;
          // if(data){
          //   alert("No Leave Data")
          //   this.router.navigate(['/employee']);
          // }
          console.log(data);
          },
          (error:HttpErrorResponse)=>{
             alert("No Certificate Data")
             this.router.navigate(['/employee']);
           }
         )
  }
  
}
