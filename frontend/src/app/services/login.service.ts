import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  saveLoginAuth(user: string) {
    sessionStorage.setItem('user', user);
  }

  checkUserLogged() {
    return sessionStorage.getItem('user') != null;
  }
}
