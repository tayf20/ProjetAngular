import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
const routes: Routes = [

    // { path: 'admin', component:AdminComponent,
    // children:[
    //   {path: 'list-payment', component:ListPaymentComponent}
     
     
    
    // ]
//}
    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
