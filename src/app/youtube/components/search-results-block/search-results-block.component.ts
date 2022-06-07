import { Component, Output, OnDestroy, Input } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { DataService } from 'src/app/core/services/data/data.service';
import { SubscriptionLike, Observable } from 'rxjs';
import { IVideoItem } from '../../model/video-item.model';
import { Store } from '@ngrx/store';
import { selectVideoItems } from 'src/app/ngrx/selector/youtube.selectors';
import { IState } from 'src/app/ngrx/state/youtube.state';

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

  @Input() public videoItems$: Observable<IVideoItem[]> = this.store.select(selectVideoItems);

  public words: string = '';

  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    increase: true,
    isSortOn: false,
  };

  constructor(
    private filterService: FilterService,
    private sortService: SortService,
    private dataService: DataService,
    private store: Store<IState>) {

    this.subscriptionSort = this.sortService.sortAddFilterConfig$.subscribe(
      (value: ISortAddFilterConfig) => this.sortAddFilterConfig = value
    )

    this.subscriptionFilter = this.filterService.words$.subscribe(
      (value: string) => this.words = value,
    )

    this.videoItems = [];
    this.subscriptionisItems = this.dataService.items$.subscribe(
      (value: IVideoItem[] | null) => {
        console.log(value);
        this.videoItems = value ? value : []
      }
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
