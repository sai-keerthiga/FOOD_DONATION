// auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/signup', userData);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/login', credentials);
  }

  logout(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/logout');
  }

  fetch(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/fetch');
  }
}
