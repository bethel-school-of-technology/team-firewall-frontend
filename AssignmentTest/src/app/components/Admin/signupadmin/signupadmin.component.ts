import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.scss']
})
export class SignupadminComponent implements OnInit {

  newAdmin: Admin = new Admin();

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
  }

  signupAdmin() {
    console.log(this.newAdmin);
    this.UserService.signupAdmins(this.newAdmin).subscribe(myResponseObject =>{
      console.log(myResponseObject);
      if(myResponseObject.status === 200) {
        window.alert(myResponseObject.message);
        this.myRouter.navigate(["login/admin"]);
      } else {
        window.alert(myResponseObject.message);
      }
    });
  }
}
