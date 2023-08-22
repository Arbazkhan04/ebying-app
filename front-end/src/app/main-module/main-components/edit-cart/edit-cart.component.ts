import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { ToastrService } from 'ngx-toastr';
import { LocalStoragesmanagementServiceService } from 'src/app/shared/services/local-storagesmanagement-service.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit{
  url = 'http://localhost:8686/';
  cart: any[] = [];
  subTotal: number = 0;

  constructor(
    private _localStorage: LocalStoragesmanagementServiceService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeCart();
  }

  initializeCart() {
    this.getCartFromLocalStorage();
    this.calculateSubtotal();
  }

  
  getCartFromLocalStorage() {
    this.cart = this._localStorage.getCartFromLocalStorage();
  }



  removeProduct(index: number) {
    const removedProduct = this.cart.splice(index, 1)[0]; // Remove and capture the removed item
    this._localStorage.removeProductById(removedProduct);
    this.updateCartState();
  }

  changeQuantity(index: number, increase: boolean) {
    const selectedProduct = this.cart[index];
    if (increase) {
      selectedProduct.selectedQuantity++;
    } else {
      if (selectedProduct.selectedQuantity > 1) {
        selectedProduct.selectedQuantity--;
      } else {
        this.toastr.info('Product quantity cannot be less than one');
        return;
      }
    }
    this.updateCartState();
  }

  updateCartState() {
    this._localStorage.addToCart(this.cart);
    this.calculateSubtotal();
  }


  calculateSubtotal() {
    this.subTotal = this.cart.reduce((total, element) => total + element.selectedQuantity * element.price, 0);
  }



  checkOut()
  {
    this.http
      .post('http://localhost:8686/PayManagmentRouter/PayWithStripe', {
        cart: this.cart,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51M6c7oCJCsl6hapAF5Q20mT2fXnLo5FzHmltaUhwdhkZ51ptRco8WUzay3DlbFy7JT2K8pNDRjo89bdFiFUBlPxm00RpK01KmR');
        stripe?.redirectToCheckout({
          sessionId: res.sessionId,
        });
      });
  }
}
