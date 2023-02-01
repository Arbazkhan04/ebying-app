import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MainComponentsComponent } from './main-components/main-components.component';
import { HomeComponent } from './main-components/home/home.component';
import { AboutUSComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { EditCartComponent } from './main-components/edit-cart/edit-cart.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ProductsComponent } from './main-components/products/products.component';
import { PurchaseFailedComponent } from './main-components/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfulComponent } from './main-components/purchase-successful/purchase-successful.component';
import { ViewProductComponent } from './main-components/view-product/view-product.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MainModuleComponent,
    MainComponentsComponent,
    HomeComponent,
    AboutUSComponent,
    CheckOutComponent,
    ContactUsComponent,
    EditCartComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PurchaseFailedComponent,
    PurchaseSuccessfulComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ]
})
export class MainModuleModule { }
