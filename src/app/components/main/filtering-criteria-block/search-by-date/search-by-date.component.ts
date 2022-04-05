import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.scss']
})

export class SearchByDateComponent {

  public sortOn: boolean = false;

  public sortProps: string = 'date';

  public sortIncreasingDate: boolean = true;

  @Output() sortOnChange = new EventEmitter<boolean>();
  @Output() sortPropsChange = new EventEmitter<string>();
  @Output() sortIncreasingChange = new EventEmitter<boolean>();

  sortDateOnClick(): void {
    this.sortOn = true;
    this.sortOnChange.emit(this.sortOn);
    this.sortPropsChange.emit(this.sortProps);
    this.sortIncreasingChange.emit(this.sortIncreasingDate);
  }
}
