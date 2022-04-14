import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  #isSettingsOpen: boolean = false;

  isSettingsOpenChange = new EventEmitter<boolean>()


  get isSettingsOpen(): boolean {
    return this.#isSettingsOpen;
  }

  set isSettingsOpen(value: boolean) {
    this.#isSettingsOpen = value;
    this.isSettingsOpenChange.emit(value);
  }

  constructor() { }
}
