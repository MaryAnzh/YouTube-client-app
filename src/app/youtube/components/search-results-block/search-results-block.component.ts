import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { items } from 'src/app/data/items';
import { ISortAddFilterConfig, IWordsSearch} from 'src/app/shared/directives/filtering-model';
import { Item } from 'src/app/youtube/model/search-item.model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { DataService } from 'src/app/core/services/date/data.service';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],

})

export class SearchResultsBlockComponent {

  public items: Item[] = [];

  public words: string = '';

  public sortAddFilterConfig: ISortAddFilterConfig;

  constructor(
    private filterService: FilterService,
    private sortService: SortService,
    private dataService: DataService) {

    this.sortAddFilterConfig = this.sortService.sortAddFilterConfig;
    this.sortService.sortAddFilterConfigChange.subscribe(
      (value: ISortAddFilterConfig) => this.sortAddFilterConfig = value,
      (error) => console.log(`Error: ${error}`),
      () => console.log("Complete")
    )

    this.words = this.filterService.words;
    this.filterService.wordsChange.subscribe(
      (value: string) => this.words = value,
      (error) => console.log(`Error: ${error}`),
      () => console.log("Complete")
    )

    this.items = this.dataService.items;
    this.dataService.itemsChange.subscribe(
      (value: Item[]) => this.items = value
    )
  }
}
