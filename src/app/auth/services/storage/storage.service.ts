import { Injectable } from '@angular/core';
import { IUsreStorageData } from '../../model/user-storage-data.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  storage = window.localStorage;

  #usreStorageData: IUsreStorageData;

  constructor(private authService: AuthService) {
    this.#usreStorageData = {
      token: '',
      userName: '',
    }
  }

  public get usreStorageData(): IUsreStorageData {
    return this.#usreStorageData;
  }

  public set usreStorageData(value: IUsreStorageData) {
    this.#usreStorageData = value;
  }

  public authUserCheck() {
    const auth: string | null = this.storage.getItem('userAuth');

    if (auth) {
      this.authService.isAuth = true;
      this.usreStorageData = JSON.parse(auth);
    }
  }

  public setAuthToLocalStorage(name: string, token: string) {
    const usreStorageData: IUsreStorageData = {
      token: token,
      userName: name,
    }
    this.authService.isAuth = true;
    this.storage.setItem('userAuth', JSON.stringify(usreStorageData));
  }

  public clearAuth() {
    this.storage.removeItem('userAuth');
    this.authService.isAuth = false;
    this.usreStorageData = {
      token: '',
      userName: '',
    }

  }

}
