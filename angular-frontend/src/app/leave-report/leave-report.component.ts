import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.component.html',
  styleUrls: ['./leave-report.component.css']
})
export class LeaveReportComponent implements OnInit{

  leave: Leave = new Leave();
  public appliedLeaves;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

 constructor(private leaveService : LeaveService, private router: Router) { }

  ngOnInit(): void {
    
    this.leaveService.getAllLeaveDetailsByEmailId(this.employeeEmailId).subscribe(
          data => {
          this.appliedLeaves = data;
          // if(data){
          //   alert("No Leave Data")
          //   this.router.navigate(['/employee']);
          // }
          console.log(data);
          },
          (error:HttpErrorResponse)=>{
             alert("No Leave Data")
             this.router.navigate(['/employee']);
           }
         )
  }

  
}
