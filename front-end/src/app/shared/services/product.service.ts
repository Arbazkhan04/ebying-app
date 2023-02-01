import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  CreateProductCard(Payload:any){
    return this.http.post('http://localhost:8686/ProductMangementRouter/ProductData',Payload);
  }
  GetAllProductData(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/GetProductData')
  }
  GetAllDataById(id:any){
    return this.http.get(`http://localhost:8686/ProductMangementRouter/getDocumentById/${id}`)
  }

  DeleteDataById(id:any){
    return this.http.delete(`http://localhost:8686/ProductMangementRouter/DeleteProductById/${id}`)
  }

  hardDelte(id:any){
   return this.http.delete(`http://localhost:8686/ProductMangementRouter/hardDeleteProductById${id}`)
  }
  updataData(payload:any){
    return this.http.post('http://localhost:8686/ProductMangementRouter/updateProductById',payload)
  }

  GetDataWhoseCategoryIsAll(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/getDocumentByCatagory')
  }
  getDataWhsoeCatoryIsShoes(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/shoesCatory')
  }
  getDataWhsoeCatoryIsPant(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/pantCatory')
  }
  getDataWhsoeCatoryIsQuatra(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/pantCatory')
  }
  getDataWhsoeCatoryIsMakup(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/makupCatory')
  }
  getDataWhsoeCatoryIsBaby(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/getBabyData')
  }
  getDataWhsoeCatoryIsGroceries(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/getGroceriesData')
  }
  getDataByFilterFromZeroToTwnety(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/zeroToTwenty')
  }
  getDataFromTwentyFiveToFiveHun(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/twentyFiveToFiveHun')
  }
  getDataAboveFromFiveHundred(){
    return this.http.get('http://localhost:8686/ProductMangementRouter/aboveFromFiveHundred')
  }
}

