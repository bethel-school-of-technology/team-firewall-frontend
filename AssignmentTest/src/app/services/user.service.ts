import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Banker } from '../models/banker';
import { Bank } from '../models/bank';
import { Admin } from '../models/admin';
import { Loan } from '../models/loan';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }
  serverURL: string = 'http://localhost:3000'

  signupBankers(newbanker: Banker, newBank: Bank): Observable<any> {
    var request = {
      firstName: newbanker.FirstName,
      lastName: newbanker.LastName,
      email: newbanker.Email,
      password: newbanker.Password,
      bankName: newBank.Name
    };
    return this.myHttp.post(this.serverURL + "/signup/banker", request);
  }

  getBanks(): Observable<any> {
    return this.myHttp.get(this.serverURL + "/findbanks");
  }

  signupAdmins(newAdmin: Admin): Observable<any> {
    var request = {
      firstName: newAdmin.FirstName,
      lastName: newAdmin.LastName,
      email: newAdmin.Email,
      password: newAdmin.Password
    }
    return this.myHttp.post(this.serverURL + "/signup/admin", request);
  }

  loginBanker(email: string, password: string): Observable<any> {
    let bankerInfo = {
      email,
      password
    }
    return this.myHttp.post(this.serverURL + "/login/banker", bankerInfo);
  }

  loginAdmin(email: string, password: string): Observable<any> {
    let adminInfo = {
      email,
      password
    }
    return this.myHttp.post(this.serverURL + "/login/admin", adminInfo);
  }

  getBankerPortfolio(): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    return this.myHttp.get(this.serverURL + "/portfolio/:id");
  }

  getBankers(): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {

    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.get(this.serverURL + "/admin", { headers: abHeaders });
  }

  getAdminPortfolio(): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    return this.myHttp.get(this.serverURL + "/portfolio/:id");
  }

  addBank(newBank: Bank): Observable<any> {
    var request = {
      name: newBank.Name
    }
    return this.myHttp.post(this.serverURL + "/addbank", request);
  }

  loansForSale(): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {

    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.get(this.serverURL + "/loansforsale", {headers: abHeaders});
  }

  loansToSell(): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {

    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.get(this.serverURL + "/loanstosell", {headers: abHeaders});
  }

  loanInfo(id: number): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {
    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.get(this.serverURL + `/loan/${id}`, {headers: abHeaders});
  }

  getBanker(): Observable<any> {authService: localStorage.getItem("vaultToken");
  let abHeaders = {
  }
  if (localStorage.getItem("vaultToken")) {
    abHeaders = {
      Authorization: localStorage.getItem("vaultToken")
    }

  } else {
    abHeaders = {
      Authorization: ""
    }
  }
  return this.myHttp.get(this.serverURL + "/banker", {headers: abHeaders});}

  dontSell(id: number): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {
    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.post(this.serverURL + `/unsellloan/${id}`, {headers: abHeaders});
  }

  buyLoan(id: number): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {
    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.post(this.serverURL + `/buyloan/${id}`, {headers: abHeaders});
  }

  bankPortfolio(id: number): Observable<any> {
    authService: localStorage.getItem("vaultToken");
    let abHeaders = {
    }
    if (localStorage.getItem("vaultToken")) {
      abHeaders = {
        Authorization: localStorage.getItem("vaultToken")
      }

    } else {
      abHeaders = {
        Authorization: ""
      }
    }
    return this.myHttp.get(this.serverURL + `/portfolio/${id}`, {headers: abHeaders});
  }

}
