import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})

export class FilteringCriteriaBlockComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: true,
    increase: true
  };

  public sortIncreasingDate: boolean = true;

  //@Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  sortDateOnClick(): void {
    this.sortIncreasingDate = !this.sortIncreasingDate;

    this.sortAddFilterConfig = {
      field: 'date',
      isSortOn: true,
      increase: this.sortIncreasingDate,
    }

    //this.sortAddFilterConfigChange.emit(this.sortAddFilterConfig);
  }

  public sortIncreasingViews: boolean = true;

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  sortByViewsOnClick(): void {
    this.sortIncreasingViews = !this.sortIncreasingViews;

    this.sortAddFilterConfig = {
      field: 'views',
      isSortOn: true,
      increase: this.sortIncreasingViews,
    }

    this.sortAddFilterConfigChange.emit(this.sortAddFilterConfig);
  }

  public words: string = '';

  //@Output() wordsChange = new EventEmitter<string>();

  clickme(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;

    //this.wordsChange.emit(this.words);

  }
}
