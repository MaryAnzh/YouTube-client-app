import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  #words: string = '';

  get words(): string {
    return this.#words;
  }

  @Input() set words(value: string) {
    this.#words = value;
    this.wordsChange.emit(this.words);
  }

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

