import { Injectable, Output, EventEmitter } from '@angular/core';


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
