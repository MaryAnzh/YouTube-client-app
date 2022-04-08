import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';
import { ISortAddFilterConfig } from 'src/app/model/filtering-model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  @Input() sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    derection: false,
    increase: false
 };

  @Input() words: string = '';

  public currentItems: Item[] = items;

}
