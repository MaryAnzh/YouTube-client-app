import { Injectable, EventEmitter } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, map } from 'rxjs';
import { IResAuthLogin } from '../../model/user-storage-data.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _user$$ = new BehaviorSubject<IResAuthLogin | null>(null);

  public isLoggedIn$ = this._user$$.asObservable().pipe(map(user => user !== null));

  public user$ = this._user$$.asObservable();

  constructor(private s: StorageService) {
    const uwer: IResAuthLogin | null = JSON.parse(this.s.getData('key'));
    if (uwer) {
      this._user$$.next(uwer);
    }
  }

  logIn(name: string) {
    const token = '123456';
    const userData: IResAuthLogin = {
      login: name,
      token: token,
    }
    this.s.setData(userData);
  }

  logOut() {
    this.s.clear();
  }
}
