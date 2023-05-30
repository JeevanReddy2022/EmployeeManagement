import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-approve-reject-training',
  templateUrl: './approve-reject-training.component.html',
  styleUrls: ['./approve-reject-training.component.css']
})
export class ApproveRejectTrainingComponent implements OnInit{

  constructor(private trainingService: TrainingService){ }
  training: Training = new Training();
  public trainings;
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");
  public trainId;
  public trainingName;
  public startDate;
  public endDate;
  public trainingStatus;

  ngOnInit(): void {
    this.getTrainingDetails();
  }

  getTrainingDetails(){
    this.trainingService.getAllTrainingDetailsByStatus().subscribe(
      data => {
        this.trainings = data;
        console.log(data);
      },
      (error:HttpErrorResponse)=>{
        this.trainings = [];
      }
    )
  }

  approveTraining(emailId,startDate,endDate,trainingName,trainId){
    this.training.emailId=emailId;
    this.training.startDate=startDate;
    this.training.endDate=endDate;
    this.training.trainingName=trainingName;
    this.training.trainId=trainId;
    this.training.trainingStatus="APPROVED";
    this.trainingService.updateTrainingStatus(trainId, this.training).subscribe(
      data=>{
        alert("Training Approved Successfully")
        this.getTrainingDetails();
      },
      (error:HttpErrorResponse)=>{
        alert("Error in approving training")
      }
    )
  }
}
