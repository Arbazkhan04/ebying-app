import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-analystic',
  templateUrl: './product-analystic.component.html',
  styleUrls: ['./product-analystic.component.css']
})
export class ProductAnalysticComponent implements OnInit {
  myArray:any=[];
  getParticularData:any={}
  url='http://localhost:8686/'
  myForm : any | FormGroup 
  particularProductData: any;
  makeIdPublic:any;
  constructor(private productService:ProductService,private toastrService:ToastrService,private fromBulider:FormBuilder) {this.myFormModal()}
 
  ngOnInit(): void {
    this.getAllData()
  }

  myFormModal(){
    this.myForm=this.fromBulider.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
      // size: new FormArray([])
    })
  }
 

  getAllData(){
    this.productService.GetAllProductData().subscribe((res:any)=>{
      res.Result.forEach((element:any) => {
        if(element.softDelete!==1){
          this.myArray.push(element)
        }
      });
     })
  }
  getParticularDataById(id:any){
    this.makeIdPublic = id;
    this.productService.GetAllDataById(id).subscribe((res:any)=>{
      this.getParticularData=res.Result
      this.myForm=this.fromBulider.group({
        productName: new FormControl(this.getParticularData?.productName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        quantity: new FormControl(this.getParticularData?.quantity, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        price: new FormControl(this.getParticularData?.price, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        description: new FormControl(this.getParticularData?.description, Validators.required),
        color: new FormControl(this.getParticularData?.color, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        companyName: new FormControl(this.getParticularData?.companyName, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        category: new FormControl(this.getParticularData?.category, Validators.required),
        // size: new FormArray([])
      })
    })
  }

  deleteById(id:any){
    this.productService.DeleteDataById(id).subscribe((res:any)=>{
      this.toastrService.error(res.Message)
      this.myArray=[]
      this.getAllData()
     
  })
}

hardDeleteById(_id:any){
    this.productService.hardDelte(_id).subscribe(res=>{
    res
    })
}

updata(){
  let payLoad = this.myForm.value;
    payLoad['_id'] = this.makeIdPublic;
    this.productService.updataData(payLoad).subscribe((res:any) => {
      this.toastrService.show(res.Message);
      this.getParticularDataById(this.makeIdPublic)
    })
}

}
