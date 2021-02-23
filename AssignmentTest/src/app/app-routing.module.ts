import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignupbankerComponent } from './components/Banker/signupbanker/signupbanker.component';
//import { SignUpAdminComponent } from './components/signupadmin/signupadmin.component';
import { BkrloginComponent } from './components/Banker/bkrlogin/bkrlogin.component';
import { SignupadminComponent } from './components/Admin/signupadmin/signupadmin.component';
import { AdminloginComponent } from './components/Admin/adminlogin/adminlogin.component';
import { AdminpageComponent } from './components/Admin/adminpage/adminpage.component';
//import { LoginAdminComponent } from './components/loginadmin/loginadmin.component';


const routes: Routes = [
  { path: "signup/banker", component: SignupbankerComponent },
  //Banker signup page
  { path: "signup/admin", component: SignupadminComponent },
  //Admin Sign Up page
  { path: "login/banker", component: BkrloginComponent },
  //Banker Login
  { path: "login/admin", component: AdminloginComponent },
  //Admin Login page
  { path: "adminpage", component: AdminpageComponent }
  //Admin Page
  

];

@NgModule({
  imports:
    [RouterModule.forRoot(routes),
  ],
  exports:
    [ RouterModule
    ]
})
export class AppRoutingModule { }
