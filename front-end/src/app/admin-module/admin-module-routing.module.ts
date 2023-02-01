import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductAnalysticComponent } from './admin-component/product-analystic/product-analystic.component';
import { ProductsComponent } from './admin-component/products/products.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  {path: '', component: AdminModuleComponent,
  children:[
    { path:'', component:DashboardComponent },
    { path:'dash-board', component:DashboardComponent },
    { path:'products', component:ProductsComponent },
    { path:'products-analystic', component:ProductAnalysticComponent },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
