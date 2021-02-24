import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banker } from '../../../models/banker';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-bkrportfolio',
  templateUrl: './bkrportfolio.component.html',
  styleUrls: ['./bkrportfolio.component.css']
})
export class BkrportfolioComponent implements OnInit {

  currentBanker: Banker = new Banker();
  id: number;
  banker: Banker = new Banker();

  constructor(private UserService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params.id
   }

  ngOnInit(): void {
    console.log(this.id);
    this.UserService.bankPortfolio(this.id).subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentBanker = myResponseObject.banker;
    })

    this.UserService.getBanker().subscribe(banker => {
      this.banker = banker
    })
  }

}