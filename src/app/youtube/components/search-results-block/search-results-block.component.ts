import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { items } from 'src/app/data/items';
import { ISortAddFilterConfig, IWordsSerch } from 'src/app/shared/directives/filtering-model';
import { Item } from 'src/app/youtube/model/search-item.model';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],

})

export class SearchResultsBlockComponent {

  @Input() items: Item[] = items;

  public words: string = '';

  public sortAddFilterConfig: ISortAddFilterConfig;

  constructor(private filterService: FilterService) {

    this.sortAddFilterConfig = this.filterService.sortAddFilterConfig;
    this.filterService.sortAddFilterConfigChange.subscribe(
      (value: ISortAddFilterConfig) => this.sortAddFilterConfig = value,
      (error) => console.log(`Error: ${error}`),
      () => console.log("Complete")
    )
  }
}
