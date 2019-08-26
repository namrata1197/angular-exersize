import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from './common/common.module';


const routes: Routes = [
  {
    path:'customer',
    loadChildren: ()=> import('./customer-1/customer-1.module').then(mod=>mod.Customer1Module),
    data:{
      preload:true
    }
  },
  {
    path:'order',
    loadChildren: ()=> import('./order/order.module').then(mod=>mod.OrderModule)
    // ,loadChildren: './order/order.module#OrderModule'
    //, data:{
    //   preload:true
    // }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //for custome preloading
       preloadingStrategy: CommonModule
      
      // for Built in Preload
      //  preloadingStrategy: PreloadAllModules

    }
    )],
  exports: [RouterModule],
  providers:[CommonModule]
})

export class AppRoutingModule { }
