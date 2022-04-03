import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  #items: Item[] = [];
  currentItems: Item[] = [];

  #word: string = '';
  //фильтрация работает пока только от сюда, если изсенить #word:, например,
  //если ввести '40', найдется только одна карточка

  get items() {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.currentItems = [...value];
    this.itemsChange.emit(this.items);
  };

  @Output() itemsChange = new EventEmitter<Item[]>()

  get word() {
    return this.#word;
  }

  @Input() set word(value: string) {
    this.#word = value;
    this.wordChange.emit(this.word);
  }

  @Output() wordChange = new EventEmitter<string>()

}
