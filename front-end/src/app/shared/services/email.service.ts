import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendEmail(paylaod:any){
    return this.http.post('http://localhost:8686/emailMangementRouter/sendEmailAgent',paylaod)
  }
}
