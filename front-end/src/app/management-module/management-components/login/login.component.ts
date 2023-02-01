import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//public Vs private by defualt every object is public public means  
//it is accesable in class and as well as in the component.html
//private only accessable in the class example 
 // public myName='khan'  
  // // accessable in template and as well as in the class
  // private myName2='khan'
  // // only accessable in class 

export class LoginComponent implements OnInit {
 public loginFrom :FormGroup | any;


  constructor(public readonly fb:FormBuilder,
   public readonly toastrService:ToastrService,
    public readonly userService:UserManagementService,
    public readonly Router:Router
    ) { this.loginFromModal() }
    
    loginFromModal(){
      this.loginFrom=this.fb.group({
        email:new FormControl(''),
        password:new FormControl('')
      })
    }
  ngOnInit(): void {
  }
   
  submitLoginForm(){
  
    this.userService.userLogin(this.loginFrom.value).subscribe((res:any)=>{
      this.userService.setLocalStorageToken(res.Token)
      if(res.UserPrivilege==='Admin'){
       this.Router.navigate(['/admin'])
       this.toastrService.show(res.Message)
      }
     else{
      this.toastrService.show(res.Message)

     }
     
    })
    
  }
}
