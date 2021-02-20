import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-signupbanker',
  templateUrl: './signupbanker.component.html',
  styleUrls: ['./signupbanker.component.css']
})
  
export class SignupbankerComponent implements OnInit {
  
  newBank: Bank = new Bank();
  newBanker: Banker = new Banker();
  

  constructor(private UserService: UserService, private myRouter: Routes) { }

  ngOnInit(): void {
  }

  signupBanker() {
    console.log(this.newBanker, this.newBank);
    this.UserService.signupBankers(this.newBanker, this.newBank).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if (myResponseObject.status === 200) {
        //Login Successful
        window.alert(myResponseObject.message);
        localStorage.setItem("vaultToken", myResponseObject.token);
        this.myRouter.navigate(["/portfolio/:id"]);
      }
      //Login Unsuccessful
      else {
        window.alert(myResponseObject.message);
      }
    })
  }
}
