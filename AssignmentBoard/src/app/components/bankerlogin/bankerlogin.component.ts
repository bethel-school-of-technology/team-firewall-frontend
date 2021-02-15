import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-bankerlogin',
  templateUrl: './bankerlogin.component.html',
  styleUrls: ['./bankerlogin.component.css']
})
export class BankerloginComponent implements OnInit {

  loginform = {
    email: "",
    password: ""
  }
  constructor(private myUserService: UsersService) { }

  ngOnInit(): void {
  }

  signinBanker() {
    console.log(this.loginform);
    this.myUserService.loginBanker(this.loginform.email, this.loginform.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

}
