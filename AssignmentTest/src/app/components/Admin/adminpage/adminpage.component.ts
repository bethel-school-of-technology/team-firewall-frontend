import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from 'src/app/models/bank';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  toggleOn = true;
  banks: Bank[] = [];
  bankers: Banker[] = [];
  newBank: Bank = new Bank;

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("vaultToken")){
      window.alert("You are Not Logged In!");
      this.myRouter.navigate(["/login/banker"])
    } else {
      this.UserService.getBanks().subscribe(banks => {
      this.banks = banks;
      console.log(banks)
    });

    this.UserService.getBankers().subscribe(bankers => {
      this.bankers = bankers;
      console.log(bankers)
    });
    }
    
  }

  addBank(){
    console.log(this.newBank);
    this.UserService.addBank(this.newBank).subscribe(MyResponseObject => {
      console.log(MyResponseObject);
      if(MyResponseObject.status === 200){ 
        window.alert(MyResponseObject.message);
        this.myRouter.navigate(["adminpage"]);
      } else {
        window.alert(MyResponseObject.message);
      }
    });
  } 

}
