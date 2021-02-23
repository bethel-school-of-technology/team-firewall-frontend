import { Component, OnInit } from '@angular/core';
import { Banker } from '../../../models/banker';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-bkrportfolio',
  templateUrl: './bkrportfolio.component.html',
  styleUrls: ['./bkrportfolio.component.css']
})
export class BkrportfolioComponent implements OnInit {

  currentBanker: Banker = new Banker();

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getBankerPortfolio().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentBanker = myResponseObject.banker;
    })
  }

}