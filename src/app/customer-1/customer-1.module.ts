import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer1RoutingModule } from './customer-1-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    Customer1RoutingModule
  ]
})
export class Customer1Module {
  constructor(){
    console.log("Customer NModule");
    
  }
 }
