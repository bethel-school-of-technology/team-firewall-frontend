import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loanstosell',
  templateUrl: './loanstosell.component.html',
  styleUrls: ['./loanstosell.component.css']
})
export class LoanstosellComponent implements OnInit {

  loans: Loan[] = []

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("vaultToken")){
      window.alert("You are Not Logged In!");
      this.myRouter.navigate(["/login/banker"])
    } else{
      this.UserService.loansToSell().subscribe(loans => {
      this.loans = loans
    })
    }

    
  }

}
