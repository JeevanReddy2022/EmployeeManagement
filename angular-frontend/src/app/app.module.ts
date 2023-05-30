import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyCertificateComponent } from './apply-certificate/apply-certificate.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { CertificateReportComponent } from './certificate-report/certificate-report.component';
import { ApproveRejectLeaveComponent } from './approve-reject-leave/approve-reject-leave.component';
import { ApproveRejectCertificateComponent } from './approve-reject-certificate/approve-reject-certificate.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ApplyTrainingComponent } from './apply-training/apply-training.component';
import { ApproveRejectTrainingComponent } from './approve-reject-training/approve-reject-training.component';
import { TrainingReportComponent } from './training-report/training-report.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ManagerComponent,
    EmployeeComponent,
    ViewEmployeeDetailsComponent,
    ApplyLeaveComponent,
    ApplyCertificateComponent,
    LeaveReportComponent,
    CertificateReportComponent,
    ApproveRejectLeaveComponent,
    ApproveRejectCertificateComponent,
    AttendenceComponent,
    ApplyTrainingComponent,
    ApproveRejectTrainingComponent,
    TrainingReportComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
