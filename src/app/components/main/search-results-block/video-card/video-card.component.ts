import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  #items: Item[] = [];

  #date: Date = new Date();

  get items() {
    return this.#items;
  }

  @Input() set items(value: Item[]) {
    this.#items = value;
    this.itemsChange.emit(this.items);
  };

  @Output() itemsChange = new EventEmitter<Item[]>()

  dateColor(dateString: string): string {
    const itemDate = Date.parse(dateString);
    const itemAgeInMilliseconds = +this.#date - +itemDate;
    const millisecondsInDay = 86400000;
    const itemAgeInDay = (itemAgeInMilliseconds / millisecondsInDay);
    let color = '';
    const week = 7;
    const manth = 31;
    const halfAYear = 184;

    if (itemAgeInDay < week) {
      color = 'blue';
    } else if (itemAgeInDay > week && itemAgeInDay <= manth) {
      color = 'green';
    } else if (itemAgeInDay > manth && itemAgeInDay <= halfAYear) {
      color = 'yellow';
    } else {
      color = 'red';
    }

    return color;
  }

}
