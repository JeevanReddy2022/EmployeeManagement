import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-training',
  templateUrl: './apply-training.component.html',
  styleUrls: ['./apply-training.component.css']
})
export class ApplyTrainingComponent implements OnInit{

  submitted=false;
  training :Training = new Training();
  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

  ngOnInit(): void {
    
  }

  constructor(private trainingService: TrainingService, private router:Router) { }

  selectedtrainingName: string;
  startDate: string;
  endDate: string;
  errorMessage: string;
  message: string;

  saveTraining(){
    this.trainingService.createTraining(this.training).subscribe(
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
    if (!this.selectedtrainingName || !this.endDate || !this.startDate) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
  
    // Clear error message 
    this.errorMessage = '';

    alert('Training Applied Successfully');
    this.training.emailId=this.employeeEmailId;
    
    console.log(this.training);
    this.saveTraining();
    
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
