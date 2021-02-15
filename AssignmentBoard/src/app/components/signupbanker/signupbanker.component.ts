import { Component, OnInit } from '@angular/core';
import { Bankers } from 'src/app/models/bankers';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signupbanker',
  templateUrl: './signupbanker.component.html',
  styleUrls: ['./signupbanker.component.css']
})
export class SignupbankerComponent implements OnInit {
  
  newBanker: Bankers = new Bankers();

  constructor( private myUserSerice: UsersService) { }

  ngOnInit(): void {
  }

  signupBanker() {
    console.log(this.newBanker);
    this.myUserSerice.SignupBankers(this.newBanker).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

}
