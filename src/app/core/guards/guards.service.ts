import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GuardsService {

  #isAuth: boolean = false;

  isAuthChange = new EventEmitter<boolean>();

  public get isAuth(): boolean {
    return this.#isAuth;
  }

  public set isAuth(value: boolean) {
    this.#isAuth = value;
    this.isAuthChange.emit(value);
  }

  constructor() { }
}
