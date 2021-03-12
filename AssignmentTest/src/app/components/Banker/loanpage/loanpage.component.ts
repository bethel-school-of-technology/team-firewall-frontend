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
  toggleOn = true;
  currentLoan: Loan = new Loan();
  id: number;

  constructor(private UserService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    if (!localStorage.getItem("vaultToken")) {
      window.alert("You are Not Logged In!");
      this.router.navigate(["/login/banker"])
    } else {
      console.log(this.id)
      this.UserService.loanInfo(this.id).subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.currentLoan = myResponseObject.loan;
      });

      this.UserService.getBanker().subscribe(banker => {
        this.banker = banker
      })
    }
    // let id = +this.route.snapshot.paramMap.get('id');

  }

  sellLoan(){
    this.UserService.sellLoan(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
    if(this.currentLoan.ForSale === false){
      this.router.navigate(["homepage"])
    }
  }

  dontSell() {
    this.UserService.dontSell(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })

  }

  buyLoan() {
    this.UserService.buyLoan(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
    });
  }

}
