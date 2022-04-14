import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  #isAuth: boolean = true;

  constructor() { }

  isAuthChange = new EventEmitter<boolean>();

  get isAuth(): boolean {
    return this.#isAuth;
  }

  set isAuth(value: boolean) {
    this.#isAuth = value;
    this.isAuthChange.emit(value);
  }
}
