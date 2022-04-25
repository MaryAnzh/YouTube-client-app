import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  public isSettingsOpen$$ = new BehaviorSubject<boolean>(false);

  constructor() {  }

}
