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
    let token = this.getToken();

    if(this.tokenExistAndIsValid(token)) {
      return true;
    }
    return false;
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  private isValidToken(token: string) {
    const tokenDecoded = jwt_decode(token) as Token;
    const dateExpiredInTimeStamp = tokenDecoded.exp;
    return Date.now() < dateExpiredInTimeStamp * 1000;
  }

  private tokenExistAndIsValid(token: string | null) {
    if(token === null) {
      return false;
    }

    if (!this.isValidToken(token)) {
      return false;
    }

    return true;
  }
}
