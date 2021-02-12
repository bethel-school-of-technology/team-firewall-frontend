import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';
import { BankerloginComponent } from './components/bankerlogin/bankerlogin.component';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';







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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
