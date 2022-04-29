import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, Observable, map } from 'rxjs';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  //задание на применение debounceTime
  private _searchString$$ = new BehaviorSubject<string>('');

  public searchString$ = this._searchString$$
    .pipe(
      debounceTime(1000),
      filter((value) => value.length > 2),
  );

  @Input() isAuth$: Observable<boolean> | null = null;

  constructor(private dataService: DataService) {
    this.searchString$.subscribe(
      (value: string) => this.dataService.updateSearchString(value)
    )
}

  searchWordsInput(value: string): void {
    if (this.isAuth$) {
      this._searchString$$.next(value);
    }
  }

  ngOnDestroy(): void {
    this._searchString$$.unsubscribe();
  }
}
