import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanku',
  standalone: true,
  imports: [HttpClientModule],
  providers:[HttpClient],
  templateUrl: './thanku.component.html',
  styleUrl: './thanku.component.css'
})
export class ThankuComponent implements OnInit{
  userData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.user) {
      this.userData = state.user;
    }
    console.log(this.userData.name);
  }
  

}
