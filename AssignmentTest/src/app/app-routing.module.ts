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
import { HomepageComponent } from './components/Banker/homepage/homepage.component';
import { LoanstobuyComponent } from './components/Banker/loanstobuy/loanstobuy.component';
import { LoanstosellComponent } from './components/Banker/loanstosell/loanstosell.component';
import { LoanpageComponent } from './components/Banker/loanpage/loanpage.component';
import { BkrportfolioComponent } from './components/Banker/bkrportfolio/bkrportfolio.component';
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
  { path: "adminpage", component: AdminpageComponent },
  //Admin Page
  { path: "homepage", component: HomepageComponent},
  //Banker Home Page
  { path: "loansforsale", component: LoanstobuyComponent},
  //Buying Loans Page
  { path: "loanstosell", component: LoanstosellComponent},
  //Selling Loans Page
  { path: "loan/:id", component: LoanpageComponent},
  //Individual Loan Information
  { path: "portfolio/:id", component: BkrportfolioComponent}
  //Bank Portfolio Page

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
