import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signupbanker',
  templateUrl: './signupbanker.component.html',
  styleUrls: ['./signupbanker.component.css']
})
export class SignupbankerComponent implements OnInit {

  newBank: Bank = new Bank();
  newBanker: Banker = new Banker();

  constructor( private myUserSerice: UserService) { }

  ngOnInit(): void {
  }

  signupBanker() {
    console.log(this.newBanker, this.newBank);
    this.myUserSerice.signupBankers(this.newBanker, this.newBank).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }
}
