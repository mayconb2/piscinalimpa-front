import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Token } from './token';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasTokenAndIsValid() {
    return this.getToken()
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    if(this.verifyToken()) {
      return window.localStorage.getItem(KEY);
    }
    return null;
  }

  private isValidToken(token: string) {
    const tokenDecoded = jwt_decode(token) as Token;
    const dateExpiredInTimeStamp = tokenDecoded.exp;
    return Date.now() > dateExpiredInTimeStamp;
  }

  private verifyToken() {
    const token = window.localStorage.getItem(KEY);
    if (token && this.isValidToken(token)) {
      return true;
    }

    return false;
  }
}
