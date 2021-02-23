import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../models/admin';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-adminportfolio',
  templateUrl: './adminportfolio.component.html',
  styleUrls: ['./adminportfolio.component.css']
})
export class AdminportfolioComponent implements OnInit {

  currentAdmin: Admin = new Admin();

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getAdminPortfolio().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.currentAdmin = myResponseObject.admin;
    })
  }
}
