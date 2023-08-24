import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerRoutingModule } from './spinner-routing.module';
import { SpinnerComponent } from './spinner.component';
import { SharedSpinnerComponent } from './shared-spinner/shared-spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    SharedSpinnerComponent
  ],
  imports: [
    CommonModule,
    SpinnerRoutingModule
  ],
  exports: [
    SharedSpinnerComponent,
  ]
})
export class SpinnerModule { }
