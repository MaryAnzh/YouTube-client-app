import { Injectable, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SortService {
  _sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: false,
    increase: false
  };

  private _sortAddFilterConfig$$ = new BehaviorSubject<ISortAddFilterConfig>(this._sortAddFilterConfig);

  public sortAddFilterConfig$ = this._sortAddFilterConfig$$.asObservable();

  constructor() { }

  changeSortAddFilterConfig(sortAddFilterConfig: ISortAddFilterConfig): void {
    this._sortAddFilterConfig$$.next(sortAddFilterConfig);
  }

}
