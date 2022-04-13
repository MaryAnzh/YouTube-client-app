import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig, IWordsSerch } from 'src/app/shared/directives/filtering-model';
import { Item } from 'src/app/youtube/model/search-item.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})

export class SearchResultsBlockComponent {
  @Input() items: Item[] | undefined;

  public words: string = '';

 public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: false,
    increase: false
  };

  // @Input() headerWords: IWordsSerch = {
  //   searchStart: false,
  //   wordsValue: ''
  // };

 }
