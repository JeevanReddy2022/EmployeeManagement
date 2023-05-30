import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from './certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey'
    })
  }

  private certificationURL = "http://localhost:8080/api/v1/certification";

  createCertication(certification: Certification){
    return this.httpClient.post(`${this.certificationURL}`, certification);
  }

  getAllCertificationDetailsByEmailId(emailId): Observable<Object>{
    return this.httpClient.get<Certification[]>(`${this.certificationURL+"/emailId/"+emailId}`,this.httpOptions);
  }

  getAllCertificationDetailsByStatus(): Observable<Certification[]>{
    return this.httpClient.get<Certification[]>(`${this.certificationURL+"/status"}`,this.httpOptions);
  }
   
  updateCertificationStatus(certiId: number, certification: Certification): Observable<Object>{
    return this.httpClient.put(`${this.certificationURL+"/updateStatus/"+certiId}`,certification,this.httpOptions);
  }
}
