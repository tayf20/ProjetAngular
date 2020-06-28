import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurVolunteerComponent } from './our-volunteer/our-volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { LatestActivityComponent } from './latest-activity/latest-activity.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminComponent } from './admin/admin.component';
import { ChildComponent } from './child/child.component';
import { LisChildComponent } from './lis-child/lis-child.component';
import { AppComponent } from './app.component';
import { InnerLayoutComponent } from './layout/page-content/inner-layout/inner-layout.component';
import { OutLayoutComponent } from './layout/page-content/out-layout/out-layout.component';
import { AddChildComponent } from './add-child/add-child.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
//  { path: '' , redirectTo: '/home', pathMatch: 'full'},


// { path: 'event', component: EventComponent}, 
// { path: 'avtivities', component: LatestActivityComponent},
// { path: 'donate', component: DonateComponent},
// { path: 'volunteer', component: OurVolunteerComponent},
// { path: 'contact', component:ContactComponent},
// { path: 'register', component:RegisterComponent},
 
// { path: 'loginsuccess',component:LoginsuccessComponent},
// { path: 'activity', component:OurVolunteerComponent},

// { path: 'cart', component:CartComponent},
{ path: '', component:InnerLayoutComponent,
 children:[
   //{ path: 'admin', component:AdminComponent},
   { path: 'home', component: HomeComponent},
   { path: 'event', component: EventComponent},
   { path: 'avtivities', component: LatestActivityComponent},
   { path: 'donate/:id', component: DonateComponent},
   { path: 'volunteer', component: OurVolunteerComponent},
   { path: 'contact', component:ContactComponent},
   { path: 'register', component:RegisterComponent}, ]},

{ path: '', component: OutLayoutComponent,
 children:[
   { path: 'login', component:LoginComponent},
    {path: 'child', component:ChildComponent},
    {path: 'add-child', component:AddChildComponent},
    
    {path: 'user',component:UserComponent},
    { path: 'admin', component:AdminComponent}]}
// { path: 'admin', component:AdminComponent,
// children:[
//  ,
//   {path: 'child/lis-child', component:LisChildComponent}
 

// ]

// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
