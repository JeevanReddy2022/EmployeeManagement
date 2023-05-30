import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from './training';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey'
    })
  }

  private trainingURL = "http://localhost:8080/api/v1/training";

  createTraining(training: Training){
    return this.httpClient.post(`${this.trainingURL}`, training);
  }

  getAllTrainingDetailsByEmailId(emailId): Observable<Object>{
    return this.httpClient.get<Training[]>(`${this.trainingURL+"/emailId/"+emailId}`,this.httpOptions);
  }

  getAllTrainingDetailsByStatus(): Observable<Training[]>{
    return this.httpClient.get<Training[]>(`${this.trainingURL+"/status"}`,this.httpOptions);
  }
   
  updateTrainingStatus(trainId: number, training: Training): Observable<Object>{
    return this.httpClient.put(`${this.trainingURL+"/updateStatus/"+trainId}`,training,this.httpOptions);
  }
}
