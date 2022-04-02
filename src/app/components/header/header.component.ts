import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  #isSettingsBlockOpened: boolean = false;

  get isSettingsBlockOpened() {
    return this.#isSettingsBlockOpened;
  }

  @Input() set isSettingsBlockOpened(value: boolean) {
    this.#isSettingsBlockOpened = value;
    this.isSettingsBlockOpenedChange.emit(this.isSettingsBlockOpened);

    console.log(`Filter visible: ${value}`);
  }

  @Output() isSettingsBlockOpenedChange = new EventEmitter<boolean>();
}
