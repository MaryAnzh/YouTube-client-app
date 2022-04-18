import { Component, OnInit, Input, Output } from '@angular/core';
import { ISortAddFilterConfig, IWordsSearch } from 'src/app/shared/directives/filtering-model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { DataService } from 'src/app/core/services/date/data.service';
import { SubscriptionLike } from 'rxjs';
import { ISearchVideoItem } from '../../model/search-item.model';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],

})

export class SearchResultsBlockComponent {
  public subscriptionisItems: SubscriptionLike;

  @Output() public videoItems: ISearchVideoItem[];

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

    this.videoItems = [];
    this.subscriptionisItems = this.dataService.items$.subscribe(
      (value: ISearchVideoItem[] | null) => this.videoItems = value ? value : []
    )
  }
}
