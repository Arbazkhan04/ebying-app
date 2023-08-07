import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStoragesmanagementServiceService } from 'src/app/shared/services/local-storagesmanagement-service.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit {
  
  url='http://localhost:8686/'
  cart:any[]=[]
  subTotal:number = 0;



  constructor(
    private _localStorage:LocalStoragesmanagementServiceService,
    private toastr : ToastrService
    ) {this.getCart()
      this.subtotalProduct()}

  ngOnInit(): void {
  }
 
  getCart(){
  this.cart=this._localStorage.getCartFromLocalStorage()
  }

  removeProductFromLocalStorage(index:number)
  {
    let getObjectByIndex = this.cart[index];
    console.log(getObjectByIndex)
    this._localStorage.removeProductById(getObjectByIndex);
    this.cart.splice(index, 1); // Remove the item from the cart array
    this._localStorage.addToCart(this.cart);
  }

  increseQuantity(index:number)
  {
    this.cart[index].selectedQuantity++;
    this._localStorage.addToCart(this.cart);
  }

  decreaseQuantity(index:number)
  {
   if(this.cart[index].selectedQuantity<=1)
   {
     this.toastr.info("product Quantity can not be less than zero")
  }
  else 
  {
     this.cart[index].selectedQuantity--;
     console.log(this.cart[index].selectedQuantity)
     this._localStorage.addToCart(this.cart);
   }
  }

  subtotalProduct()
  {
    this.cart.forEach(element => {
      this.subTotal+=element.selectedQuantity*element.price
    });
  }
}
