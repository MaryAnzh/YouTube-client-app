import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig, IWordsSerch } from 'src/app/shared/directives/filtering-model';
import { Item } from 'src/app/youtube/model/search-item.model';
import { items } from 'src/app/data/items';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})

export class SearchResultsBlockComponent {
  @Input() items: Item[] = items;

  @Input() words: string = '';

  @Input() isSettingsOpened: boolean = false;

  @Input() sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: false,
    increase: false
  };

  @Input() headerWords: IWordsSerch = {
    searchStart: false,
    wordsValue: ''
  };

 }
