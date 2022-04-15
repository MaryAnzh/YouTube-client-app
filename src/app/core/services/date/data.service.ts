import { Injectable, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/youtube/model/search-item.model';
import { items } from 'src/app/data/items';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  #items: Item[] = [];
  #IWordsSearch: string = '';

  @Output() itemsChange = new EventEmitter<Item[]>();

  @Output() wordsSerchChange = new EventEmitter<string>();

  get items(): Item[] {
    return this.#items;
  }

  set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(value);
  }

  get IWordsSearch(): string {
    return this.#IWordsSearch;
  }

  set IWordsSearch(value: string) {
    this.#IWordsSearch = value;
    this.wordsSerchChange.emit(value);
    this.items = items;
  }

  constructor() { }
}
