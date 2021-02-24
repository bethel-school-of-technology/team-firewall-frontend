import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banker } from 'src/app/models/banker';
import { Loan } from 'src/app/models/loan';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loanpage',
  templateUrl: './loanpage.component.html',
  styleUrls: ['./loanpage.component.css']
})
export class LoanpageComponent implements OnInit {

  banker: Banker = new Banker();
  currentLoan: Loan = new Loan();
  id: number;

  constructor(private UserService: UserService, private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    // let id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.UserService.loanInfo(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentLoan = myResponseObject.loan;
    });

    this.UserService.getBanker().subscribe(banker => {
      this.banker = banker
    })
  }

  dontSell() {
    this.UserService.dontSell(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

  buyLoan(){
    this.UserService.buyLoan(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
    });
  }

}
