import { Component, OnInit } from '@angular/core';
import { AttendenceService } from '../attendence.service';
import { Attendence } from '../attendence';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit{

  email: string;
  selectedDate: string;
  public attendanceList;

  submitted=false;
  attendence :Attendence = new Attendence();
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

  constructor(private attendenceService: AttendenceService) {}

  ngOnInit(): void { 

    this.attendenceService.getAllAttendenceDetailsByEmailId(this.employeeEmailId).subscribe(
      data => {
      this.attendanceList = data;
      console.log(data);
      },
      (error:HttpErrorResponse)=>{
         alert("No Attendence Data");
       }
     )
  }

  saveAttendence(){
    this.attendenceService.createAttendence(this.attendence).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
   }

  submitAttendance(): void {
    this.submitted = true;

    alert('Attendance Submitted Successfully');
    
    console.log(this.attendence);
    this.saveAttendence();

  }



}
