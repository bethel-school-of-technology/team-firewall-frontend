import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  newAdmin: Admin = new Admin();

  constructor() { }

  ngOnInit(): void {
  }
  signupAdmin() {
    console.log(this.newAdmin)
  }

}
