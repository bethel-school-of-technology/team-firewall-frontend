import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupbankerComponent } from './components/Banker/signupbanker/signupbanker.component';
import { BkrloginComponent } from './components/Banker/bkrlogin/bkrlogin.component';
import { BkrportfolioComponent } from './components/Banker/bkrportfolio/bkrportfolio.component';
import { AdminportfolioComponent } from './components/Admin/adminportfolio/adminportfolio.component';
import { SignupadminComponent } from './components/Admin/signupadmin/signupadmin.component';
import { AdminloginComponent } from './components/Admin/adminlogin/adminlogin.component';
import { AdminpageComponent } from './components/Admin/adminpage/adminpage.component';
import { TestscssComponent } from './component/testscss/testscss.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupbankerComponent,
    BkrloginComponent,
    BkrportfolioComponent,
    AdminportfolioComponent,
    SignupadminComponent,
    AdminloginComponent,
    AdminpageComponent,
    TestscssComponent
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
