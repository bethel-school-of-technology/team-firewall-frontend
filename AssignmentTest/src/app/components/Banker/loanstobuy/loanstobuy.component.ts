import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loanstobuy',
  templateUrl: './loanstobuy.component.html',
  styleUrls: ['./loanstobuy.component.css']
})
export class LoanstobuyComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.loansForSale().subscribe(loans => {
      this.loans = loans;
      console.log(loans);
    });
  }

}
