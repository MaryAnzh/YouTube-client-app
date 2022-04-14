import { Injectable, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';

let filterServiceId: number = 0;

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  #sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: false,
    increase: false
  };

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  public get sortAddFilterConfig(): ISortAddFilterConfig {
    return this.#sortAddFilterConfig;
  }

  public set sortAddFilterConfig(value: ISortAddFilterConfig) {
    this.#sortAddFilterConfig = value;
    this.sortAddFilterConfigChange.emit(value);
  }

  constructor() { }

}
