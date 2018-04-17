import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getUser(): any {
    console.log(sessionStorage.getItem('username'));
    return sessionStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  logout(): any {
    sessionStorage.removeItem('username');
  }

}
