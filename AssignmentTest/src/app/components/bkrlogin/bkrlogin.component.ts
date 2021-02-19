import { Component, OnInit } from '@angular/core';
import { Banker } from 'src/app/models/banker';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bkrlogin',
  templateUrl: './bkrlogin.component.html',
  styleUrls: ['./bkrlogin.component.css']
})
export class BkrloginComponent implements OnInit {
  bankerInfo: Banker = new Banker();
 

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.bankerInfo);
    this.UserService.loginBanker(this.bankerInfo.Email, this.bankerInfo.Password).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })

  }

}
