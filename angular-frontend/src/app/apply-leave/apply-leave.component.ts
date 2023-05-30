import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit{

  submitted=false;
  leave :Leave = new Leave();
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");
  ngOnInit(): void {
    
  }

  leaveTypes: string[] = ['EMERGENCY', 'SICK', 'CASUAL']; // Example leave types
  selectedLeaveType: string;
  toDate: string;
  fromDate: string;
  errorMessage: string;
  message: string;

  constructor(private router: Router, private leaveService: LeaveService) {
    const today = new Date();
    this.toDate = this.formatDate(today);
   
  }

  validateToDate(): void {
    const toDateValue = new Date(this.toDate);
    const fromDateValue = new Date(this.fromDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set today's time to midnight for comparison

    if (isNaN(toDateValue.getTime()) || toDateValue < today) {
      // Show error message for incorrect or previous date
      this.errorMessage = 'Invalid date. Please select a future date.';
    } else {
      this.errorMessage = '';
    }
  }

  validateFromDate(): void {
   const fromDateValue = new Date(this.fromDate);
   const today = new Date();
   today.setHours(0, 0, 0, 0); // Set today's time to midnight for comparison   

    if (isNaN(fromDateValue.getTime()) || fromDateValue < today) {   
      // Show error message for incorrect or previous date   
      this.errorMessage = 'Invalid date. Please select a valid date.';   
   } else { 
      this.errorMessage = ''; 
   } 
   }
   
   saveLeave(){
    // this.leave=new Leave();
    this.leaveService.createLeave(this.leave).subscribe(
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

  submitForm():void{
 
    this.submitted = true;

    // Handle form submission logic here
    if (!this.selectedLeaveType || !this.toDate || !this.fromDate) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Clear error message
    this.errorMessage = '';

    alert('Leave applied successfully');
    this.leave.emailId=this.employeeEmailId;
    
    console.log(this.leave);
    this.saveLeave();
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
