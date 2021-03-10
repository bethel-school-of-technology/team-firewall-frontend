import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from 'src/app/models/bank';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signupbanker',
  templateUrl: './signupbanker.component.html',
  styleUrls: ['./signupbanker.component.css']
})
export class SignupbankerComponent implements OnInit {

  pwdPattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  newBank: Bank = new Bank();
  newBanker: Banker = new Banker();
  banks: Bank[] = [];

 

  constructor(private UserService: UserService, private myRouter: Router) { }



  ngOnInit() {
      this.UserService.getBanks().subscribe(banks => {
        this.banks = banks;
        console.log(banks)
      });
  }

  

  signupBanker() {
    console.log(this.newBanker, this.newBank);
    this.UserService.signupBankers(this.newBanker, this.newBank).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200) {
        window.alert(myResponseObject.message);
        this.myRouter.navigate(["login/banker"]);
      } else {
        window.alert(myResponseObject.message);
      }
    });
  }

  
  
}
