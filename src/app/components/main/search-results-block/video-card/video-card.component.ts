import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  #items: Item[] = [];

  get items() {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(this.items);
    console.log('Отработало на блоке результатов');
  };

  @Output() itemsChange = new EventEmitter<Item[]>();

}
