import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.css']
})
export class SignupadminComponent implements OnInit {

  newAdmin: Admin = new Admin();
  pwdPattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

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
