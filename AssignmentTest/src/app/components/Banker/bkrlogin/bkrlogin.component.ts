import { Component, OnInit } from '@angular/core';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkrlogin',
  templateUrl: './bkrlogin.component.html',
  styleUrls: ['./bkrlogin.component.scss']
})
export class BkrloginComponent implements OnInit {
  bankerInfo = {
    email: "",
    password: ""
  }

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void { 
  }

  login() {
    console.log(this.bankerInfo);
    this.UserService.loginBanker(this.bankerInfo.email, this.bankerInfo.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200){
        window.alert(myResponseObject.message);
        localStorage.setItem("vaultToken", myResponseObject.token);
        this.myRouter.navigate(["homepage"]);
      } else {
        window.alert(myResponseObject.message);
      }
    })

  }

}
