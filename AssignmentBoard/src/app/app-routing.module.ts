import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';
import { BankerloginComponent } from './components/bankerlogin/bankerlogin.component';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';




const routes: Routes = [

  { path: "signup/banker", component: SignupbankerComponent},
    //Banker signup page
  
  { path: "login/banker", component: BankerloginComponent },
    //Banker login page
  
  { path: "signup/admin", component: SignupadminComponent},
    //Admin signup page
  
  { path: "login/admin", component: AdminloginComponent },
    //Admin login page

  { path: "", redirectTo: "signup/banker", pathMatch: "full"}
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    BankerloginComponent,
    SignupbankerComponent,
    SignupadminComponent,
    AdminloginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
