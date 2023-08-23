import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import {LoadingService} from 'src/app/shared/services/loading.service'
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

  hideCategorySection=true;
  

  private subjectKeyUp = new Subject<any>();

  constructor(private ProductService: ProductService,
     private toastrService: ToastrService,
     public _loadingService:LoadingService) 
     { this.getLatestCategoryData() }

  ngOnInit(): void {
    this.getAllProductData();
  }


  toggleCategorySection() {
    this.hideCategorySection = !this.hideCategorySection;
    }

  searchItem(event: any) {
    const value = event.target.value;
    this.subjectKeyUp.next(value);
    this.subjectKeyUp.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((data) => {
        this._loadingService.startLoading()
        return this.ProductService.searchProducts(data).pipe(
          delay(2000) //delay for 2 sedond
        )
       
      })
    ).subscribe((res: any) => {
      const myArray: any[] = [];
      res.forEach((element: any) => {
        if (element.softDelete !== 1) {
          myArray.push(element);
        }
      });
      this.showAllProduct = myArray;

      this._loadingService.stopLoading()
    });
  }
  

  getAllProductData() {
    this._loadingService.startLoading();
    setTimeout(() => {
    this.ProductService.GetAllProductData().subscribe(
      (res: any) => {
        const filteredArray = res.Result.filter((element: any) => element.softDelete !== 1);
        this.showAllProduct = filteredArray;
      },
      (error) => {
        this.toastrService.show(error)
      },
      () => {
        this._loadingService.stopLoading(); // Stop loading when the subscription completes
      }
    );
    },2000)
  }
  


  getLatestCategoryData() {
    this._loadingService.startLoading(); // Show loading spinner
    setTimeout(() => {
      this.ProductService.GetDataWhoseCategoryIsAll().subscribe(
        (res: any) => {
          const filteredArray = res.Result.filter((element: any) => element.softDelete !== 1);
          this.showAllProduct = filteredArray;
        },
        (error) => {
          this.toastrService.show(error);
        },
        () => {
          this._loadingService.stopLoading(); // Hide loading spinner when the subscription completes
        }
      );
    }, 2000);
  }
  


  getShoesData() {
    this._loadingService.startLoading();

    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsShoes().subscribe(
        (res:any)=>{
          const filterProduct = res.Result.filter((elemeny:any)=>elemeny.softDelete!=1)
          this.showAllProduct = filterProduct
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
        )
    }, 2000);
  }


  getPantData() {
    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsPant().subscribe(

        (res:any)=>{
          const filterData = res.Result.filter((element:any)=>element.softDelete!=1);
          this.showAllProduct = filterData;
        },

        (error)=>{
         this.toastrService.show(error);
        },

        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }


  getQuartaData() {
  
    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsQuatra().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((element:any)=>element.softDelete!=1);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }


  getMakupData() {
    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsMakup().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((element:any)=>element.softDelete!=1);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
   
  }


  getBabyData() {
    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsBaby().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((elemetn:any)=>elemetn.softDelete!=1);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
   
  }


  getGroceryData() {
     this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataWhsoeCatoryIsGroceries().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((elemetn:any)=>elemetn.softDelete!=1);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }


  RangeFormZeroToTwentyFive() {
    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataByFilterFromZeroToTwnety().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((elemetn:any)=>elemetn.softDelete!=1 && elemetn.result!=false);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }


  RangeFromTwentyFiveToFiveHun() {

    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataFromTwentyFiveToFiveHun().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((elemetn:any)=>elemetn.softDelete!=1 && elemetn.result!=false);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }

  RangeAboveFromFiveHun() {


    this._loadingService.startLoading();
    setTimeout(() => {
      this.ProductService.getDataAboveFromFiveHundred().subscribe(
        (res:any)=>{
          const filterData = res.Result.filter((elemetn:any)=>elemetn.softDelete!=1 && elemetn.result!=false);
          this.showAllProduct = filterData;
        },
        (error)=>{
          this.toastrService.show(error);
        },
        ()=>{
          this._loadingService.stopLoading();
        }
      )
    }, 2000);
  }


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
