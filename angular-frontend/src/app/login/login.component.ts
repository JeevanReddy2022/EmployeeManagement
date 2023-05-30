import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted = false;

  id: number;
  employee: Employee = new Employee();

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService:EmployeeService, private route: ActivatedRoute) { }

  ngOnInit():void {
    document.getElementById("beforeLogin").style.display = "block";
    document.getElementById("afterLogin").style.display = "none";
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
            )]],
      });
      this.id = this.route.snapshot.params['id'];
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
//  public movie;

  getemail() {
    this.employeeService.getAllEmployeesByEmailId(this.employee.emailId).subscribe(
      data=>{
        console.log(data);
        sessionStorage.setItem("loggedEmployeeEmailId",this.employee.emailId);
        // alert('LogIn SUCCESS!\n\n' + JSON.stringify(this.loginForm.value, null, 4));
        alert('LogIn SUCCESS')
        document.getElementById("beforeLogin").style.display = "none";
          document.getElementById("afterLogin").style.display = "block";
        this.router.navigate(['/employee']);
      
      },
      (error:HttpErrorResponse)=>{
        alert('LogIn UNSUCCESSFULL!\n\n INVALID Credentials');
      })
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      //display form values on success
      if(this.employee.emailId=="manager@gmail.com" && this.employee.password == "Manager@123"){
        console.log("Manager");
        document.getElementById("beforeLogin").style.display = "none";
        document.getElementById("afterLogin").style.display = "block";
        this.router.navigate(['/manager']);
      }else{
        this.getemail();
      }
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }


}
function employeeDetails(id: any, number: any) {
  throw new Error('Function not implemented.');
}

