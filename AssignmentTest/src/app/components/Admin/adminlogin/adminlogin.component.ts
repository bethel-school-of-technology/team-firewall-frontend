import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminInfo = {
    email: "",
    password: ""
  }

  constructor(private UserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.adminInfo);
    this.UserService.loginAdmin(this.adminInfo.email, this.adminInfo.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200){
        window.alert(myResponseObject.message);
        localStorage.setItem("vaultToken", myResponseObject.token);
        this.myRouter.navigate(["adminpage"])
      } else {
        window.alert(myResponseObject.message);
      }
    });
  }

}
