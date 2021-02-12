import { Component, OnInit } from '@angular/core';
import { Bankers } from 'src/app/models/bankers';

@Component({
  selector: 'app-signupbanker',
  templateUrl: './signupbanker.component.html',
  styleUrls: ['./signupbanker.component.css']
})
export class SignupbankerComponent implements OnInit {
  
  newBanker: Bankers = new Bankers();

  constructor() { }

  ngOnInit(): void {
  }

  signupBankers() {
    console.log(this.newBanker)
  }

}
