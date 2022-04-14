import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public dimmyToken: string = '';

  public userName: string = '';

  constructor(private storageService: StorageService) { }

  public userNameChange = new EventEmitter<String>()

  public login(name: string) {
    this.userName = name;
    this.userNameChange.emit(name);

    this.dimmyToken = 'adc123';

    this.storageService.setAuthToLocalStorage(name, this.dimmyToken);

  }

  public logOut() {
    this.storageService.clearAuth();
  }


}
