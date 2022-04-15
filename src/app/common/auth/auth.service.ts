import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Common } from '../common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(login: string, password: string) {
    return this.http.post(Common.BASE_URL + '/login', {login, password},  { responseType: 'text' });
  }
}
