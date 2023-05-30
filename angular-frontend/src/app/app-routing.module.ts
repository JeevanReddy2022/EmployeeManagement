import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApplyCertificateComponent } from './apply-certificate/apply-certificate.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { CertificateReportComponent } from './certificate-report/certificate-report.component';
import { ApproveRejectLeaveComponent } from './approve-reject-leave/approve-reject-leave.component';
import { ApproveRejectCertificateComponent } from './approve-reject-certificate/approve-reject-certificate.component';
import { Attendence } from './attendence';
import { AttendenceComponent } from './attendence/attendence.component';
import { ApplyTrainingComponent } from './apply-training/apply-training.component';
import { TrainingReportComponent } from './training-report/training-report.component';
import { ApproveRejectTrainingComponent } from './approve-reject-training/approve-reject-training.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path : 'employees' , component: EmployeeListComponent},
  { path : 'create-employee', component: CreateEmployeeComponent},
  { path : '', redirectTo: 'employees', pathMatch: 'full'},
  { path : 'update-employee/:id', component: UpdateEmployeeComponent},
  { path : 'employee-details/:id', component: EmployeeDetailsComponent},
  { path : 'login', component: LoginComponent},
  { path : 'header', component: HeaderComponent},
  { path : 'manager', component: ManagerComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'view-employee-details', component: ViewEmployeeDetailsComponent},
  { path: 'apply-leave', component: ApplyLeaveComponent},
  { path: 'apply-certificate', component: ApplyCertificateComponent},
  { path: 'leave-report', component: LeaveReportComponent},
  { path: 'certificate-report', component: CertificateReportComponent},
  { path: 'approve-reject-leave', component: ApproveRejectLeaveComponent},
  { path: 'approve-reject-certificate', component: ApproveRejectCertificateComponent},
  { path: 'attendence', component: AttendenceComponent},
  { path: 'apply-training', component: ApplyTrainingComponent},
  { path: 'training-report', component: TrainingReportComponent},
  { path: 'approve-reject-training', component:ApproveRejectTrainingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
