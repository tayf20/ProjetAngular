import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin.routing.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonateComponent } from './donate/donate.component';
import { OurVolunteerComponent } from './our-volunteer/our-volunteer.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { LatestActivityComponent } from './latest-activity/latest-activity.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ChildComponent } from './child/child.component';
import { LisChildComponent } from './lis-child/lis-child.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { ListPaymentComponent } from './admin/list-payment/list-payment.component';
import { InnerLayoutComponent } from './layout/page-content/inner-layout/inner-layout.component';
import { OutLayoutComponent } from './layout/page-content/out-layout/out-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DonateComponent,
    InnerLayoutComponent,
    OutLayoutComponent,
    OurVolunteerComponent,
    ContactComponent,
    EventComponent,
    EventDetailComponent,
    LatestActivityComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
   CartComponent,
    LoginsuccessComponent,
    ChildComponent,
    LisChildComponent,
    PageContentComponent,
   
    ListPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
