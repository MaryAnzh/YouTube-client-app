import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})

export class SearchResultsBlockComponent {
  #items: Item[] = [];
  #word: string = '';

  get items() {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(this.items);
  };

  @Output() itemsChange = new EventEmitter<Item[]>();

  get word() {
    return this.#word;
  }

  @Input() set word(value: string) {
    this.#word = value;
    this.wordChange.emit(this.word);
  }

  @Output() wordChange = new EventEmitter<string>()

 }
