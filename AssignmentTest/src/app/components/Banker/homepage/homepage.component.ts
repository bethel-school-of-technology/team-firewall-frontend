import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banker } from 'src/app/models/banker';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  loansp: Loan[] = [];
  loanss: Loan[] = [];
  banker: Banker = new Banker();

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("vaultToken")){
      window.alert("You are Not Logged In!");
      this.myRouter.navigate(["/login/banker"])
    } else {
      this.UserService.loansForSale().subscribe(loansp => {
      this.loansp = loansp;
    });

    this.UserService.loansToSell().subscribe(loanss => {
      this.loanss = loanss;
    })

    this.UserService.getBanker().subscribe(banker => {
      this.banker = banker
    });
    }
    
  }

}
