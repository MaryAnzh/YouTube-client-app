import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig, ISortFieldValue } from 'src/app/model/filtering-model';


@Component({
  selector: 'app-search-by-views-count',
  templateUrl: './search-by-views-count.component.html',
  styleUrls: ['./search-by-views-count.component.scss']
})

export class SearchByViewsCountComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    derection: true,
    increase: false
  };

  public sortIncreasingDate: boolean = true;

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  sortByLikesOnClick(): void {
    this.sortIncreasingDate = !this.sortIncreasingDate;

    this.sortAddFilterConfig = {
      field: 'likes',
      derection: true,
      increase: this.sortIncreasingDate
    }
  }
}
