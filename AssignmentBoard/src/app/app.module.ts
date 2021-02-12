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
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
