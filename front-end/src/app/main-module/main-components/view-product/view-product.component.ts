import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BUTTONTEXT } from 'src/app/shared/enums/button-text';
import { ProductInterface } from 'src/app/shared/interface/product';
import { LocalStoragesmanagementServiceService } from 'src/app/shared/services/local-storagesmanagement-service.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {
  public url: string | any = 'http://localhost:8686/';
  public productObject: ProductInterface | any = {}
  public selectedSizes: any = [];
  public selectedQuantity: any = 0;
  public totalQuantity: any
  public enumButtonText = BUTTONTEXT;

  public offCanvas = '';
  public cart:any = [];
  // 
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private LocalStoragesmanagementService: LocalStoragesmanagementServiceService,
    private toastrService: ToastrService

  ) {
    this.getValueFromParms()
  }

  ngOnInit(): void {
  }

  getValueFromParms() {
    const parmsId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(parmsId)
    this.productService.GetAllDataById(parmsId).subscribe((res: any) => {
      this.productObject = res.Result;
      this.totalQuantity = this.productObject.quantity;


    })
  }
  getSizes(event: any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);

    }
    console.log(this.selectedSizes)
  }
  public derease() {
    if (this.selectedQuantity > 0) {
      let getDataFromLocalStorage = this.LocalStoragesmanagementService.getCartFromLocalStorage();
      if (getDataFromLocalStorage !== null) {
        getDataFromLocalStorage.selectedQuantity--;
        this.LocalStoragesmanagementService.addToCart(getDataFromLocalStorage);
      }
      this.selectedQuantity--;
    }
  }
  public increase() {
    if (this.selectedQuantity < this.totalQuantity) {
      this.selectedQuantity++;
    }
  }

  //Chat GPT say refractor kia hai ye
  // public addToCart(){
  //   if(!this.selectedSizes.length){
  //     this.ToastrService.error('Please Select the Size before you proceeed to cart')
  //     return;
  //   }
  //   let processedCartArray = this.LocalStorageManagementService.getCartFromLocalStorage() || [];
  //   let processedCartObject = {
  //     productId: this.productObject._id,
  //     imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
  //     selectedSizes: this.selectedSizes,
  //     selectedQuantity: this.selectedQuantity,
  //     ...this.productObject
  //   }
  //   processedCartArray.push(processedCartObject);
  //   this.LocalStorageManagementService.addToCart(processedCartArray);
  // }
  //Chat GPT say refractor kia hai ye

  // without refractor
  addToCart() {
    if (this.selectedSizes.length <= 0) {
      this.toastrService.error("please select the sizes")
    }
    else {
      this.offCanvas = 'offcanvas'
      let { _id, category, color, companyName, description, price, productName, quantity } = this.productObject;
      let processedCartObject = {
        productId: _id,
        imageUrl: this.productObject?.ProductImages[0]?.ProductImageUrl,
        selectedSizes: this.selectedSizes,
        selectedQuantity: this.selectedQuantity,
        category, color, companyName, description, price, productName, quantity
      }

      let processedCartArray :any = [];
      if (this.LocalStoragesmanagementService.getCartFromLocalStorage() !== null) {
        let valueAlreadyExists = this.LocalStoragesmanagementService.getCartFromLocalStorage();
        valueAlreadyExists.forEach((element: any) => {
          processedCartArray.push(element);
        });
      }
        processedCartArray.push(processedCartObject);
       this.LocalStoragesmanagementService.addToCart(processedCartArray);
    }
    this.getCart();

  }

  decrementQuantityFromCanvas(id: any) {
    const cartFromLocalStorage = this.LocalStoragesmanagementService.getCartFromLocalStorage();
    cartFromLocalStorage.forEach((object: any) => {
      if (object.productId === id && object.selectedQuantity > 0) {
        object.selectedQuantity--;
        this.LocalStoragesmanagementService.addToCart(cartFromLocalStorage)
      }
    });
    this.getCart();
  }

  incrementQuantityFromCanvas(id: any) {
    // Phelay local storages maind say Array ley kar aao
    const cartFromLocalStorage = this.LocalStoragesmanagementService.getCartFromLocalStorage();

    //Bhai abb loop karo  aur phir id ke according  woobject ley  kar  aoo  aur  uss  ke quanitity  bas ++ kardo
    cartFromLocalStorage.forEach((object: any) => {
      if (object.productId === id && object.quantity > object.selectedQuantity) {
        object.selectedQuantity++;
        this.LocalStoragesmanagementService.addToCart(cartFromLocalStorage)
      }
    });
    this.getCart();
  }

  public viewCart() {
    this.getCart();
  }
  

  public getCart() {
    this.cart = this.LocalStoragesmanagementService.getCartFromLocalStorage();
    /*
    [
      0:{},
      1:{},
      2:{}
    ]
    */
    // }

  }
  deleteItem(id:any){
        const cartFromLocalStorage = this.LocalStoragesmanagementService.getCartFromLocalStorage(); // sari array   from  local storage
        const updatedObject = cartFromLocalStorage.filter((object:any) => object.productId  !=  id); // filter
        this.LocalStoragesmanagementService.addToCart(updatedObject);
        this.getCart();
      }
 
}





//sir code 
/* //Chat GPT say refractor kia hai ye
// public addToCart(){
//   if(!this.selectedSizes.length){
//     this.ToastrService.error('Please Select the Size before you proceeed to cart')
//     return;
//   }
//   let processedCartArray = this.LocalStorageManagementService.getCartFromLocalStorage() || [];
//   let processedCartObject = {
//     productId: this.productObject._id,
//     imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
//     selectedSizes: this.selectedSizes,
//     selectedQuantity: this.selectedQuantity,
//     ...this.productObject
//   }
//   processedCartArray.push(processedCartObject);
//   this.LocalStorageManagementService.addToCart(processedCartArray);
// }
//Chat GPT say refractor kia hai ye

//Without Refgractor
public addToCart() {
  if (this.selectedSizes.length <= 0) {
    this.ToastrService.error('Please Select the Size before you proceeed to cart')
  } else {
    this.offCanvas = 'offcanvas';
    let { _id, category, color, companyName, description, price, productName, quantity } = this.productObject;
    let processedCartObject = {
      productId: _id,
      imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
      selectedSizes: this.selectedSizes,
      selectedQuantity: this.selectedQuantity,
      category, color, companyName, description, price, productName, quantity
    }
    let processedCartArray = [];
    if (this.LocalStorageManagementService.getCartFromLocalStorage() !== null) {
      let valueAlreadyExists = this.LocalStorageManagementService.getCartFromLocalStorage();
      valueAlreadyExists.forEach((element: any) => {
        processedCartArray.push(element);
      });
    }
    processedCartArray.push(processedCartObject);
    this.LocalStorageManagementService.addToCart(processedCartArray);
  }
  this.getCart();
}
//Without Refgractor

//Chatgpt ccode
// decrementQuantityFromCanvas(id: any) {
//   const cart = this.LocalStorageManagementService.getCartFromLocalStorage();
//   const item = cart.find(item => item.productId === id);
//   if (item && item.quantity > item.selectedQuantity) {
//     item.selectedQuantity++;
//     this.LocalStorageManagementService.addToCart(cart);
//   }
//   this.getCart();
// }
//Chatgpt ccode

decrementQuantityFromCanvas(id: any) {
  const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage();
  cartFromLocalStorage.forEach((object: any) => {
    if (object.productId === id && object.selectedQuantity > 0) {
      object.selectedQuantity--;
      this.LocalStorageManagementService.addToCart(cartFromLocalStorage)
    }
  });
  this.getCart();
}

incrementQuantityFromCanvas(id: any) {
  // Phelay local storages maind say Array ley kar aao
  const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage();

  //Bhai abb loop karo  aur phir id ke according  woobject ley  kar  aoo  aur  uss  ke quanitity  bas ++ kardo
  cartFromLocalStorage.forEach((object: any) => {
    if (object.productId === id && object.quantity > object.selectedQuantity) {
      object.selectedQuantity++;
      this.LocalStorageManagementService.addToCart(cartFromLocalStorage)
    }
  });
  this.getCart();
}


public viewCart() {
  this.getCart();
}

public getCart() {
  this.cart = this.LocalStorageManagementService.getCartFromLocalStorage();
  /*
  [
    0:{},
    1:{},
    2:{}
  ]
  */
  // }

//   deleteItem(id:any){
//     const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage(); // sari array   from  local storage
//     const updatedObject = cartFromLocalStorage.filter((object:any) => object.productId  !=  id); // filter
//     this.LocalStorageManagementService.addToCart(updatedObject);
//     this.getCart();
//   }
/* */
