import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  dimmyToken: string = '';

  userName: string = '';

  constructor(private storageService: StorageService) { }

  public login(name: string) {
    this.userName = name;

    this.dimmyToken = 'adc123';

    this.storageService.setAuthToLocalStorage(name, this.dimmyToken);

  }

  public logOut() {
    this.storageService.clearAuth();
  }


}
