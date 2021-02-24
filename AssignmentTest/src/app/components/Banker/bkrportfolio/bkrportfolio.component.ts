import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { Banker } from '../../../models/banker';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-bkrportfolio',
  templateUrl: './bkrportfolio.component.html',
  styleUrls: ['./bkrportfolio.component.css']
})
export class BkrportfolioComponent implements OnInit {

  id: number;
  newLoan: Loan = new Loan();
  banker: Banker = new Banker();
  loans: Loan[] = [];
  bankers: Banker[] = [];

  constructor(private UserService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params.id
   }

  ngOnInit(): void {
    this.UserService.bankPortfolio(this.id).subscribe(loans => {
      this.loans = loans;
      console.log(loans)
    })

    this.UserService.getBanker().subscribe(banker => {
      this.banker = banker;
    })

    this.UserService.bankEmployees(this.id).subscribe(bankers => {
      this.bankers = bankers;
      console.log(bankers)
    })
  }

  dontSell(LoanId: number){
    this.UserService.dontSell(LoanId).subscribe(myResponseObject => {
      console.log(myResponseObject);
      console.log(LoanId)
    })
  }

  sellLoan(LoanId: number){
    this.UserService.sellLoan(LoanId).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

  deleteLoan(LoanId: number){
    this.UserService.deleteLoan(LoanId).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

  addLoan(){
    this.UserService.addLoan(this.newLoan).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200) {
        window.alert(myResponseObject.message);
        this.router.navigate(["homepage"])
      } else {
        window.alert(myResponseObject.message);
      }
    });
  }
  
}