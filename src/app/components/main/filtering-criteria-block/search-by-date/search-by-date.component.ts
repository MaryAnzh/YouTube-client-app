import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.scss']
})

export class SearchByDateComponent {
  #sortOn: boolean = false;

  #sortIncreasing: boolean = true;

  #sortProps: string = 'date';

  public sortPropsDate: string = 'date';

  public sortIncreasingDate: boolean = true;

  get sortOn(): boolean {
    return this.#sortOn;
  }

  @Input() set sortOn(value: boolean) {
    this.#sortOn = value;
    this.sortOnChange.emit(this.sortOn);
  }

  @Output() sortOnChange = new EventEmitter<boolean>()

  get sortProps(): string {
    return this.#sortProps;
  }

  @Input() set sortProps(value: string) {
    this.#sortProps = value;
    this.sortPropsChange.emit(this.sortProps);
  }

  @Output() sortPropsChange = new EventEmitter<string>()

  get sortIncreasing(): boolean {
    return this.#sortIncreasing;
  }

  @Input() set sortIncreasing(value: boolean) {
    this.#sortIncreasing = value;
    this.sortIncreasingChange.emit(this.sortIncreasing);
  }

  @Output() sortIncreasingChange = new EventEmitter<boolean>()

  sortDateOnClick(): void {
    this.sortOn = true;
    this.sortIncreasingDate = !this.sortIncreasingDate;
    this.sortIncreasing = this.sortIncreasingDate;
    this.sortProps = this.sortPropsDate;
  }
}
