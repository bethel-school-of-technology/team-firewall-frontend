import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loanstobuy',
  templateUrl: './loanstobuy.component.html',
  styleUrls: ['./loanstobuy.component.css']
})
export class LoanstobuyComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("vaultToken")){
      window.alert("You are Not Logged In!");
      this.myRouter.navigate(["/login/banker"])
    } else {
      this.UserService.loansForSale().subscribe(loans => {
      this.loans = loans;
      console.log(loans);
    });
    }
    
  }

}
