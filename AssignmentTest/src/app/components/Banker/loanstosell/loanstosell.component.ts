import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loanstosell',
  templateUrl: './loanstosell.component.html',
  styleUrls: ['./loanstosell.component.css']
})
export class LoanstosellComponent implements OnInit {

  loans: Loan[] = []

  constructor(private UserService: UserService) { }

  ngOnInit(): void {

    this.UserService.loansToSell().subscribe(loans => {
      this.loans = loans
    })
  }

}
