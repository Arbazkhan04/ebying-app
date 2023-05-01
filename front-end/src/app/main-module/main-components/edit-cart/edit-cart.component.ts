import { Component, OnInit } from '@angular/core';
import { LocalStoragesmanagementServiceService } from 'src/app/shared/services/local-storagesmanagement-service.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit {
  url='http://localhost:8686/'
  cart:any[]=[]
  constructor(
    private _localStorage:LocalStoragesmanagementServiceService
    ) {this.getCart()}

  ngOnInit(): void {
  }
 
  getCart(){
  this.cart=this._localStorage.getCartFromLocalStorage()
  }
}
