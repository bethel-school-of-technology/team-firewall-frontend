import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Banker } from '../models/banker';
import { Bank } from '../models/bank';


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

  loginBanker(email: string, password: string): Observable<any>{
    return this.myHttp.post(this.serverURL+"/login/Banker", {email,password})
  }
}
