import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})

export class SettingsButtonComponent {
  isSettingsOpened: boolean = false;

  @Output() isSettingsOpenedChange = new EventEmitter<boolean>();

  constructor() { }

  submitButtonOnClick():void {
    this.isSettingsOpened = !this.isSettingsOpened;
    this.isSettingsOpenedChange.emit(this.isSettingsOpened);
  }
}
