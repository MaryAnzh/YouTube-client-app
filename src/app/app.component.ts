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

  words: string = '';

  // @Output() wordsChange = new EventEmitter<string>();

  // get words(): string {
  //   return this.#words;
  // }

  // @Input() set words(value: string) {
  //   this.#words = value;
  //   this.wordsChange.emit(this.words);
  // }

  @Output() wordsChange = new EventEmitter<string>();

  #isSettingsBlockOpened: boolean = false;

  get isSettingsBlockOpened(): boolean {
    return this.#isSettingsBlockOpened;
  }

  @Input() set isSettingsBlockOpened(value: boolean) {
    this.#isSettingsBlockOpened = value;
    this.isSettingsBlockOpenedChange.emit(this.isSettingsBlockOpened);
  }

  @Output() isSettingsBlockOpenedChange = new EventEmitter<boolean>();

}
