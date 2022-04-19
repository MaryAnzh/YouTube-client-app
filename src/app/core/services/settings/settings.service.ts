import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  private _isSettingsOpen$$ = new BehaviorSubject<boolean>(false);

  public isSettingsOpen$ = this._isSettingsOpen$$.asObservable();

  public isSettingsOpen = false;

  constructor() {

  }

  open() {
    this._isSettingsOpen$$.next(true);
  }

  close() {
    this._isSettingsOpen$$.next(false);
  }

}
