import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'customer',
    loadChildren: ()=> import('./customer/customer.module').then(mod=>mod.CustomerModule),
    data:{
      preload:true
    }
  },
  {
    path:'order',
    loadChildren: ()=> import('./order/order.module').then(mod=>mod.OrderModule),
    data:{
      preload:true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
