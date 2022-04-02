import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  #isSettingsBlockOpened: boolean = false;

  #items: Item[] = [];

  get isSettingsBlockOpened() {
    return this.#isSettingsBlockOpened;
  }

  @Input() set isSettingsBlockOpened(value: boolean) {
    this.#isSettingsBlockOpened = value;
    this.isSettingsBlockOpenedChange.emit(this.isSettingsBlockOpened);

    console.log(`Filter visible: ${value}`);
  }

  @Output() isSettingsBlockOpenedChange = new EventEmitter<boolean>();

  get items() {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(this.items);
  };

  @Output() itemsChange = new EventEmitter<Item[]>();

 }
