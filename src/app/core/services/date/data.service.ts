import { Injectable, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/youtube/model/search-item.model';
import { items } from 'src/app/data/items';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  #items: Item[] = [];
  #wordsSerch: string = '';

  @Output() itemsChange = new EventEmitter<Item[]>();

  @Output() wordsSerchChange = new EventEmitter<string>();

  get items(): Item[] {
    return this.#items;
  }

  set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(value);
  }

  get wordsSerch(): string {
    return this.#wordsSerch;
  }

  set wordsSerch(value: string) {
    this.#wordsSerch = value;
    this.wordsSerchChange.emit(value);
    this.items = items;
  }

  constructor() { }
}
