import { Injectable, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  #words: string = '';

  wordsChange = new EventEmitter<string>();

  public get words(): string {
    return this.#words;
  }

  public set words(value: string) {
    this.#words = value;
    this.wordsChange.emit(value);
  }

  constructor() { }

}
