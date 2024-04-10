import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  providers:[AuthService, HttpClient, CookieService],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent{
  loginForm: { email: string, password: string } = { email: '', password: '' };
  signupForm: { name: string, email: string, phone: string, password: string } = { name: '',  email: '',phone: '', password: '' };
  
  constructor(private authService: AuthService, private router:Router , private cookieService: CookieService) { 
      
  }


  login() {
   this.authService.login(this.loginForm)
      .subscribe({
       next:(response:any) => {
          // Handle successful login
          console.log('Login successful', response);
          this.router.navigate(['/thank-you'], { state: { user: response.user } });
        },
       error:(error:any) => {
          // Handle login error
          window.alert('Please check your creditnals!');
          console.error('Login failed', error);
        }
      });
  }

  signup() {
    console.log(this.signupForm);
    this.authService.signup(this.signupForm)
    .subscribe({
     next:(response:any) => {
        // Handle successful login
        window.alert('Signup Successful, you can now login!');
        console.log('SignUp successful', response);
      },
     error:(error:any) => {
        // Handle login error
        window.alert('signup failed! Try again');
        console.error('SignUp failed', error);
      }
    });
  }


  
  
  
  // Example function to set a cookie
  setCookie(): void {

    this.cookieService.set('username','' );
  }
  
  // Example function to get a cookie
  getCookie(): void {
    const userToken = this.cookieService.get('userToken');
    console.log('User Token:', userToken);
  }
  
  // Example function to delete a cookie
  deleteCookie(): void {
    this.cookieService.delete('userToken');
  }

}
