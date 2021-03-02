import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleOn = true;
 
  constructor() { }

  ngOnInit(): void {
    
  }
  getToken(){
    return localStorage.getItem("vaultToken");
  }
  
  logout(){
    localStorage.clear();
  }
  
}
