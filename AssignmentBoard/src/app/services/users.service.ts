import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bankers } from '../models/bankers';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myHttp: HttpClient) { }
  serverURL: string = 'http://localhost:3000'
  
  SignupBankers(newbanker: Bankers): Observable<any>
  {
    return this.myHttp.post(this.serverURL + '/signup/banker', newbanker);
  }
  SignupAdmin(newAdmin: Admin): Observable<any>
  {
    return this.myHttp.post(this.serverURL + '/signup/admin', newAdmin);
  }
  
  loginBanker(Email: string, Password: string): Observable<any>{
    let loginInfo = {
      Email,
      Password
    }
    return this.myHttp.post(this.serverURL + "/login/banker", loginInfo);
  }

  BankerProfile(): Observable<any>{
    return this.myHttp.get(this.serverURL + "/bankerprofile");
  }

  AdminProfil(): Observable<any>{
    return this.myHttp.get(this.serverURL + "/adminprofile");
  }
}
