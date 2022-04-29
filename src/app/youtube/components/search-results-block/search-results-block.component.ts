import { Component, Output, OnDestroy } from '@angular/core';
import { ISortAddFilterConfig, IWordsSearch } from 'src/app/shared/directives/filtering-model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { DataService } from 'src/app/core/services/data/data.service';
import { SubscriptionLike, Observable, pipe } from 'rxjs';
import { IVideoItem } from '../../model/video-item.model';
import { ICustomCard } from '../../model/custom-card.model';
import { Store } from '@ngrx/store';
import { selectItems } from 'src/app/redux/selectors/video-items.selectors';
import { selectCustomCards } from 'src/app/redux/selectors/custom-cards.selectors';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss'],

})

export class SearchResultsBlockComponent implements OnDestroy {
  public videoItems$: Observable<IVideoItem[]> = this.store.select(selectItems.projector);
  public customItems$: Observable<ICustomCard[]> = this.store.select(selectCustomCards.projector);

  public subscriptionSort: SubscriptionLike;

  public subscriptionFilter: SubscriptionLike;

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
    private store: Store) {

    this.subscriptionSort = this.sortService.sortAddFilterConfig$.subscribe(
      (value: ISortAddFilterConfig) => this.sortAddFilterConfig = value
    )

    this.subscriptionFilter = this.filterService.words$.subscribe(
      (value: string) => this.words = value,
    )

    this.store.subscribe((state) => console.log(state));
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
