import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from './leave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey'
    })
  }

  private leaveURL = "http://localhost:8080/api/v1/leave";

  createLeave(leave: Leave){
    return this.httpClient.post(`${this.leaveURL}`, leave);
  }

  getAllLeaveDetailsByEmailId(emailId): Observable<Object>{
    return this.httpClient.get<Leave[]>(`${this.leaveURL+"/emailId/"+emailId}`,this.httpOptions);
  }

  getAllLeaveDetailsByStatus(): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(`${this.leaveURL+"/status"}`,this.httpOptions);
  }
   
  updateLeaveStatus(leaveId: number, leave: Leave): Observable<Object>{
    return this.httpClient.put(`${this.leaveURL+"/updateStatus/"+leaveId}`,leave,this.httpOptions);
  }
}
