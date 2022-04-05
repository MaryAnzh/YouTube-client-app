import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-by-views-count',
  templateUrl: './search-by-views-count.component.html',
  styleUrls: ['./search-by-views-count.component.scss']
})

export class SearchByViewsCountComponent {

  public sortOn: boolean = false;

  public sortProps: string = 'likes';

  public sortIncreasingDate: boolean = true;

  @Output() sortOnChange = new EventEmitter<boolean>();
  @Output() sortPropsChange = new EventEmitter<string>();
  @Output() sortIncreasingChange = new EventEmitter<boolean>();

  sortByLikesOnClick(): void {
    this.sortOn = true;
    this.sortOnChange.emit(this.sortOn);
    this.sortPropsChange.emit(this.sortProps);
    this.sortIncreasingChange.emit(this.sortIncreasingDate);
  }

  // get sortOn(): boolean {
  //   return this.#sortOn;
  // }

  // @Input() set sortOn(value: boolean) {
  //   this.#sortOn = value;
  //   this.sortOnChange.emit(this.sortOn);
  // }

  // @Output() sortOnChange = new EventEmitter<boolean>()

  // get sortProps(): string {
  //   return this.#sortProps;
  // }

  // @Input() set sortProps(value: string) {
  //   this.#sortProps = value;
  //   this.sortPropsChange.emit(this.sortProps);
  // }

  // @Output() sortPropsChange = new EventEmitter<string>()

  // get sortIncreasing(): boolean {
  //   return this.#sortIncreasing;
  // }

  // @Input() set sortIncreasing(value: boolean) {
  //   this.#sortIncreasing = value;
  //   this.sortIncreasingChange.emit(this.sortIncreasing);
  // }

  // @Output() sortIncreasingChange = new EventEmitter<boolean>()

  // sortByLikesOnClick(): void {
  //   this.sortOn = true;
  //   this.sortIncreasingDate = !this.sortIncreasingDate;
  //   this.sortIncreasing = this.sortIncreasingDate;
  //   this.sortProps = this.sortPropsDate;
  // }

 }
