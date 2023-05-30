import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-training-report',
  templateUrl: './training-report.component.html',
  styleUrls: ['./training-report.component.css']
})
export class TrainingReportComponent implements OnInit{
 
  training: Training = new Training();
  public trainings;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

 constructor(private trainingService : TrainingService, private router: Router) { }

  ngOnInit(): void {
    
    this.trainingService.getAllTrainingDetailsByEmailId(this.employeeEmailId).subscribe(
          data => {
          this.trainings = data;
          
          console.log(data);
          },
          (error:HttpErrorResponse)=>{
             alert("No Training Data")
             this.router.navigate(['/employee']);
           }
         )
  }

}
