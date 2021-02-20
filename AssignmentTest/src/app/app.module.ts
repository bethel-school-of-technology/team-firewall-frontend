import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupbankerComponent } from './components/signupbanker/signupbanker.component';
import { BkrloginComponent } from './components/bkrlogin/bkrlogin.component';
import { BkrportfolioComponent } from './components/bkrportfolio/bkrportfolio.component';
import { AdminportfolioComponent } from './components/adminportfolio/adminportfolio.component';
import { SignupadminComponent } from './components/signupadmin/signupadmin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupbankerComponent,
    BkrloginComponent,
    BkrportfolioComponent,
    AdminportfolioComponent,
    SignupadminComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
