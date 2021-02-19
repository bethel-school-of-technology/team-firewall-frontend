import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';
//import { SignUpAdminComponent } from './components/signupadmin/signupadmin.component';
import { BkrloginComponent } from './components/bkrlogin/bkrlogin.component';
//import { LoginAdminComponent } from './components/loginadmin/loginadmin.component';


const routes: Routes = [
  { path: "signup/banker", component: SignupbankerComponent },
  //Banker signup page

  //{ path: "signup/admin", component: SignupAdminComponent },
  //Admin Sign Up page

  { path: "login/banker", component: BkrloginComponent },
  //Banker Login

  //{ path: "login/admin", component: LoginAdminComponent },
  //Admin Login page
  

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
