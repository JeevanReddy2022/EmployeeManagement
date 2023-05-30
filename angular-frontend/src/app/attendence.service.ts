import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendence } from './attendence';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey'
    })
  }

  private attendenceURL = "http://localhost:8080/api/v1/attendance";

  createAttendence(attendence: Attendence){
    return this.httpClient.post(`${this.attendenceURL}`, attendence);
  }

  getAllAttendenceDetailsByEmailId(emailId): Observable<Object>{
    return this.httpClient.get<Attendence[]>(`${this.attendenceURL+"/emailId/"+emailId}`,this.httpOptions);
  }
}
