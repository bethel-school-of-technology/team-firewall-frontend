import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './models/contacts/contacts.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { BankerComponent } from './components/banker/banker.component';
import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { BankerloginComponent } from './components/bankerlogin/bankerlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ListAllLoansComponent } from './components/list-all-loans/list-all-loans.component';
import { LoansForPurchaseComponent } from './component/loans-for-purchase/loans-for-purchase.component';
import { LoansForSaleComponent } from './components/loans-for-sale/loans-for-sale.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BankPortfolioComponent } from './components/bank-portfolio/bank-portfolio.component';
import { SupportComponent } from './component/support/support.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareersComponent } from './components/careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SignupComponent,
    AdminComponent,
    BankerComponent,
    SignupbankerComponent,
    SignupadminComponent,
    BankerloginComponent,
    AdminloginComponent,
    ListAllLoansComponent,
    LoansForPurchaseComponent,
    LoansForSaleComponent,
    HomepageComponent,
    BankPortfolioComponent,
    SupportComponent,
    ContactComponent,
    AboutUsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
