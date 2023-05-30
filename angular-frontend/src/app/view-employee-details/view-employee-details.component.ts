import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit{

  id:any;
  employee : Employee;
  data : any;

  constructor(private route:ActivatedRoute, private employeeService:EmployeeService) {}

  public employeeEmailId = sessionStorage.getItem("loggedEmployeeEmailId");

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.employee=new Employee();
   this.employeeService.getAllEmployeesByEmailId(this.employeeEmailId).subscribe(
    data => {
      this.data=data;
      console.log(this.data);
    })
   
  }

}
