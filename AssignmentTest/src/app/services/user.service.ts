import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Banker } from '../models/banker';
import { Bank } from '../models/bank';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }
  serverURL: string = 'http://localhost:3000'
  
  signupBankers(newbanker: Banker, newBank: Bank): Observable<any>{
    var request = {
      firstName: newbanker.FirstName,
      lastName: newbanker.LastName,
      email: newbanker.Email,
      password: newbanker.Password,
      bankName: newBank.Name
    };
    return this.myHttp.post(this.serverURL + "/signup/banker", request);
  }

  getBanks(): Observable<any>{
    return this.myHttp.get(this.serverURL + "/findbanks");
  }

  signupAdmins(newAdmin: Admin): Observable<any>{
    var request = {
      firstName: newAdmin.FirstName,
      lastName: newAdmin.LastName,
      email: newAdmin.Email,
      password: newAdmin.Password
    }
    return this.myHttp.post(this.serverURL + "/signup/admin", request);
  }

  loginBanker(email: string, password: string): Observable<any>{
    let bankerInfo = {
      email,
      password
    }
    return this.myHttp.post(this.serverURL + "/login/banker", bankerInfo);
  }

  loginAdmin(email: string, password: string): Observable<any>{
    let adminInfo = {
      email,
      password
    }
    return this.myHttp.post(this.serverURL + "/login/admin", adminInfo);
  }

  getBankerPortfolio(): Observable<any>{
    authService: localStorage.getItem("vaultToken")
    return this.myHttp.get(this.serverURL + "/portfolio/:id");
  }

  getAdminPortfolio(): Observable<any>{
    authService: localStorage.getItem("vaultToken")
    return this.myHttp.get(this.serverURL + "portfolio/:id");
  }
}
