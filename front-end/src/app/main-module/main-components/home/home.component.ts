import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showAllProduct: any = []
  // AllCatgory:any=[]
  Url = 'http://localhost:8686/'
  // show:boolean=true;
  //pegination
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private ProductService: ProductService, private toastrService: ToastrService) { this.getLatestCategoryData() }

  ngOnInit(): void {
    this.getAllProductData();



  }


  getAllProductData() {
    const myArray: any = [];
    this.ProductService.GetAllProductData().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {

          myArray.push(element
          )
        }

      })

    })
    this.showAllProduct = myArray;
  }

  getLatestCategoryData() {
    const myArray: any = [];
    this.ProductService.GetDataWhoseCategoryIsAll().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {

          myArray.push(element)


        }

      })
      //  console.log( this.showAllProduct)

    })
    this.showAllProduct = myArray;
  }


  getShoesData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsShoes().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
    // if (this.showAllProduct.lenght!=0) {
    //   this.toastrService.info("No Data available ")
    // }
  }


  getPantData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsPant().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
    
  }


  getQuartaData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsQuatra().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
  }


  getMakupData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsMakup().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }

      })
    })
    this.showAllProduct = myArray;
    

  }


  getBabyData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsBaby().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
  }


  getGroceryData() {
    const myArray: any = [];
    this.ProductService.getDataWhsoeCatoryIsGroceries().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
  }


  RangeFormZeroToTwentyFive() {
    const myArray: any = [];
    this.ProductService.getDataByFilterFromZeroToTwnety().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1 && element.result !== false) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
    console.log(this.showAllProduct)
  }


  RangeFromTwentyFiveToFiveHun() {
    const myArray: any = [];
    this.ProductService.getDataFromTwentyFiveToFiveHun().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1 && element.result !== false) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
    console.log(this.showAllProduct)
  }

  RangeAboveFromFiveHun() {
    const myArray: any = [];
    this.ProductService.getDataAboveFromFiveHundred().subscribe((res: any) => {
      res.Result.forEach((element: any) => {
        if (element.softDelete !== 1 && element.result !== false) {
          myArray.push(element)
        }
      })
    })
    this.showAllProduct = myArray;
    console.log(this.showAllProduct)
  }



  // getAllData(){
  //   this.show=true
  // }
  // getLatestData(){
  //   this.show=false;
  // }

  // searchAllProductData(id:any){
  //  this.ProductService.GetAllDataById(id).subscribe((res:any)=>{
  //   res.Result.forEach((element:any)=>{
  //     if(element.productName){
  //       this.searchProductData.push(element)
  //     }
  //   })
  //  })
  // }


  onTableDataChange(event: any) {
    this.page = event;
    // this.getAllProductData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.getAllProductData();
  }

}
