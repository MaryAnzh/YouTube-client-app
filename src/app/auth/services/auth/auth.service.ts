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
    const user: IResAuthLogin | null = this.s.getData('user');
    if (user) {
      this._user$$.next(user);
    }
  }

  logIn(name: string): void {
    const token = '123456';
    const userData: IResAuthLogin = {
      login: name,
      token: token,
    }
    this._user$$.next(userData);
    this.s.setData('user', userData);
  }

  logOut(): void {
    this.s.setData('user', null)
    this._user$$.next(null);
  }

}
