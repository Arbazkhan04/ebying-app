import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HeaderComponent } from './main-components/header/header.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfulComponent } from './main-components/purchase-successful/purchase-successful.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about-us',component:AboutUSComponent},
    {path:'check-out',component:CheckOutComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'edit-cart',component:EditCartComponent},
    {path:'footer',component:FooterComponent},
    {path:'header',component:HeaderComponent},
    {path:'products',component:ProductsComponent},
    {path:'view-product/:id',component:ViewProductComponent},
    {path:'purchase-failed',component:PurchaseFailedComponent},
    {path:'purchase-successful',component:PurchaseSuccessfulComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
