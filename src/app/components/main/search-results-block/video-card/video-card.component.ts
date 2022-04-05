import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  @Input() sortOn: boolean = false;

  @Input() sortProps: string = '';

  @Input() sortIncreasing: boolean = true;

  @Input() words: string = '';

  currentItems: Item[] = [];

  ngOnChanges(changes: SimpleChange) {
    if (this.words !== '') {
      this.currentItems = items;
      console.log('Изменение');
      console.log(this.currentItems);
    } else {
      console.log('Не менялось');
      console.log(this.currentItems);
    }
  }
}
