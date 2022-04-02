import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
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
