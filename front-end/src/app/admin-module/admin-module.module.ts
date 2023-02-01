import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductAnalysticComponent } from './admin-component/product-analystic/product-analystic.component';



@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponentComponent,
    DashboardComponent,
    ProductsComponent,
    ProductAnalysticComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModuleRoutingModule,
    ToastrModule.forRoot(),
    NgChartsModule,
 
    
  
  ]
})
export class AdminModuleModule { }
