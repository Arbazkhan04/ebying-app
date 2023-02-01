import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//  getproductData:any=[]
//  SearchData:any=[]
  constructor(
    // private productService:ProductService
    ) 
  {
    // this.GetAllProductData() 
  }

  ngOnInit(): void {
  }

  // GetAllProductData(){
  //   this.productService.GetAllProductData().subscribe((res:any)=>{
  //    this.getproductData=res.Result
    
  //    this.getproductData
  //   })
  // }

  // getProductById(_id:any){
  //  this.productService.GetAllDataById(_id).subscribe((res:any)=>{
  //    res.Result.filter((elment:any)=>{
  //     if(elment._id){
  //      console.log(elment)
  //     }
  //    })
  //  })
  // }

}
