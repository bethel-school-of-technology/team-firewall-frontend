import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.dataPath).subscribe()
  }

}
