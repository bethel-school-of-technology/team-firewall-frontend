import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';



const routes: Routes = [
  { path: "signup/banker", component: SignupbankerComponent },
  //Banker signup page
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports:
    [ RouterModule
    ]
})
export class AppRoutingModule { }
