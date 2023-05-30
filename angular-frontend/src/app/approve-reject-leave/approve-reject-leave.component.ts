import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service';
import { Leave } from '../leave';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-approve-reject-leave',
  templateUrl: './approve-reject-leave.component.html',
  styleUrls: ['./approve-reject-leave.component.css']
})
export class ApproveRejectLeaveComponent implements OnInit{

  constructor(private leaveService: LeaveService){ }
  leave: Leave = new Leave();
  public leaveRequests;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");
  public leaveId;
  public fromdate;
  public toDate;
  public leaveType;
  public leaveStatus;

  ngOnInit(): void {
    this.getLeaveDetails();
  }

  getLeaveDetails(){
    this.leaveService.getAllLeaveDetailsByStatus().subscribe(
      data => {
        this.leaveRequests = data;
        console.log(data);
      },
      (error:HttpErrorResponse)=>{
        this.leaveRequests = [];
      }
    )
  }

  approveLeave(emailId,fromDate,toDate,leaveType,leaveId){
    this.leave.emailId=emailId;
    this.leave.fromDate=fromDate;
    this.leave.toDate=toDate;
    this.leave.leaveType=leaveType;
    this.leave.leaveId=leaveId;
    this.leave.leaveStatus="APPROVED";
    this.leaveService.updateLeaveStatus(leaveId, this.leave).subscribe(
      data=>{
        alert("Leave Approved Successfully")
        this.getLeaveDetails();
      },
      (error:HttpErrorResponse)=>{
        alert("Error in approving leave")
      }
    )
  }

  rejectLeave(emailId,fromDate,toDate,leaveType,leaveId){
    this.leave.emailId=emailId;
    this.leave.fromDate=fromDate;
    this.leave.toDate=toDate;
    this.leave.leaveType=leaveType;
    this.leave.leaveId=leaveId;
    this.leave.leaveStatus="DENIED";
    this.leaveService.updateLeaveStatus(leaveId, this.leave).subscribe(
      data=>{
        alert("Leave Rejected Successfully")
        this.getLeaveDetails();
      },
      (error:HttpErrorResponse)=>{
        alert("Error in rejecting leave")
      }
    )
  }
}
