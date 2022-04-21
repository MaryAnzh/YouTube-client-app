import { Component, Output, OnDestroy } from '@angular/core';
import { ISortAddFilterConfig, IWordsSearch } from 'src/app/shared/directives/filtering-model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { DataService } from 'src/app/core/HttpClient/data/data.service';
import { SubscriptionLike } from 'rxjs';
import { IVideoItem } from '../../model/video-item.model';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],

})

export class SearchResultsBlockComponent implements OnDestroy {
  public subscriptionisItems: SubscriptionLike;

  public subscriptionSort: SubscriptionLike;

  public subscriptionFilter: SubscriptionLike;

  @Output() public videoItems: IVideoItem[];

  public words: string = '';

  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    increase: true,
    isSortOn: false,
  };

  constructor(
    private filterService: FilterService,
    private sortService: SortService,
    private dataService: DataService) {

    this.subscriptionSort = this.sortService.sortAddFilterConfig$.subscribe(
      (value: ISortAddFilterConfig) => this.sortAddFilterConfig = value
    )

    this.subscriptionFilter = this.filterService.words$.subscribe(
      (value: string) => this.words = value,
    )

    this.videoItems = [];
    this.subscriptionisItems = this.dataService.items$.subscribe(
      (value: IVideoItem[] | null) => this.videoItems = value ? value : []
    )
  }

  ngOnDestroy(): void {
    if (this.subscriptionSort) {
      this.subscriptionSort.unsubscribe();
    }
    if (this.subscriptionFilter) {
      this.subscriptionFilter.unsubscribe();
    }
  }
}
