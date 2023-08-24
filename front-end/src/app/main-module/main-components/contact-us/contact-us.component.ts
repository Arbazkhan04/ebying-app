import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/shared/services/email.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 
  myForm:FormGroup|any;
  constructor(
    private fb:FormBuilder,
    private sendMail:EmailService,
    private _toastrService:ToastrService,
    public loadingService:LoadingService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }
   
  createForm(){
    this.myForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      subject:['',Validators.required],
      message:['',Validators.required],
    })
  }

  submitForm()
  {
    this.loadingService.startLoading();
    const paylaod=this.myForm.value;
    this.sendMail.sendEmail(paylaod).subscribe(
      (res:any)=>{
      res.message;
      this._toastrService.info(res.message.Message);
    },
    (error)=>{
      this._toastrService.show(error.message)
    },
    ()=>{
      this.loadingService.stopLoading();
    }
    
    )

  }
   
}
