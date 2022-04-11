import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/model/filtering-model';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.scss']
})

export class SearchByDateComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: true,
    increase: true
  };

  public sortIncreasingDate: boolean = true;

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  sortDateOnClick(): void {
    this.sortIncreasingDate = !this.sortIncreasingDate;

    this.sortAddFilterConfig = {
      field: 'date',
      isSortOn: true,
      increase: this.sortIncreasingDate,
    }

    this.sortAddFilterConfigChange.emit(this.sortAddFilterConfig);
  }
}
