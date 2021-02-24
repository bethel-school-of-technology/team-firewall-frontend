import { Component, OnInit } from '@angular/core';
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

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
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
