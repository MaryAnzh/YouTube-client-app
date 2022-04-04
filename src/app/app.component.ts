import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './model/search-item.model';
import { items } from './services/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'YouTube-client-app';

  #isSettingsBlockOpened: boolean = false;

  #items: Item[] = [];

  #word: string = '';

  get isSettingsBlockOpened(): boolean {
    return this.#isSettingsBlockOpened;
  }

  @Input() set isSettingsBlockOpened(value: boolean) {
    this.#isSettingsBlockOpened = value;
    this.isSettingsBlockOpenedChange.emit(this.isSettingsBlockOpened);
  }

  @Output() isSettingsBlockOpenedChange = new EventEmitter<boolean>();

  get items(): Item[] {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(this.items);
  };

  @Output() itemsChange = new EventEmitter<Item[]>();

  get word(): string {
    return this.#word;
  }

  @Input() set word(value: string) {
    this.#word = value;
  }
}
