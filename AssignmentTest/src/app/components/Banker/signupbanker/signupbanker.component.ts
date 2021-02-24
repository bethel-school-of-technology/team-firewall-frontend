import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
        window.alert(myResponseObject.messsage);
        this.myRouter.navigate(["login/banker"]);
      } else {
        window.alert(myResponseObject.message);
      }
    });
  }

  
}