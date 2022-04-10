import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/model/filtering-model';


@Component({
  selector: 'app-search-by-views-count',
  templateUrl: './search-by-views-count.component.html',
  styleUrls: ['./search-by-views-count.component.scss']
})

export class SearchByViewsCountComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: true,
    increase: true
  };

  public sortIncreasingDate: boolean = true;

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  sortByLikesOnClick(): void {
    this.sortIncreasingDate = !this.sortIncreasingDate;

    this.sortAddFilterConfig = {
      field: 'likes',
      isSortOn: true,
      increase: this.sortIncreasingDate
    }

    this.sortAddFilterConfigChange.emit(this.sortAddFilterConfig);
  }
}
