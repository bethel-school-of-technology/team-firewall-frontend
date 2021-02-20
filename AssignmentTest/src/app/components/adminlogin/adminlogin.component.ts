import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminInfo: Admin = new Admin();

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.adminInfo);
    this.UserService.loginAdmin(this.adminInfo.Email, this.adminInfo.Password).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
  }

}
