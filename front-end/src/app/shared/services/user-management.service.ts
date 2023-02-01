import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private httpClient:HttpClient) { }

  userSingUp(payload:any){
     return this.httpClient.post('http://localhost:8686/userManagementRouter/userRegister',payload)
  }
  userLogin(payload:any){
   return this.httpClient.post('http://localhost:8686/userManagementRouter/userLogin',payload)
  }
  setLocalStorageToken(payload:any){
    return localStorage.setItem('access token',payload)
  }
  checkIfUserLogin() {
    return localStorage.getItem('access token') !== null;
  }
}
