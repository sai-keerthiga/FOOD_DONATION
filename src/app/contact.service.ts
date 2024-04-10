import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl = 'http://localhost:8000/api/contact'; // Adjust the URL as per your backend configuration

  constructor(private http: HttpClient) { }

  submitContact(contactData: any): Observable<any> {
    return this.http.post<any>(this.backendUrl, contactData);
  }
}
