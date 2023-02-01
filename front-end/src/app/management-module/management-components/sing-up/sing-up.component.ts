import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserManagementService } from 'src/app/shared/services/user-management.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  public singUpForm: FormGroup | any
  // public readonly myName='khan' not change able 
  constructor(public readonly formBulider:FormBuilder,
    public readonly userMangementService:UserManagementService,
    public readonly toastrService:ToastrService)
   { this.mySingUpModal() }

  ngOnInit(): void {
  }

  mySingUpModal(){
   this.singUpForm=this.formBulider.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
   })
  }

  submitSingUpForm() {
    let getUserFormValue=this.singUpForm.value;
    this.userMangementService.userSingUp(getUserFormValue).subscribe((res:any)=>{
     this.toastrService.show(res.Message)
    })

  }
}
