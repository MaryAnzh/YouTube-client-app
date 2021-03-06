import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FilterService {

  public words: string = '';

  private _words$$ = new BehaviorSubject<string>('');

  public words$ = this._words$$.asObservable();

  constructor() { }

  searchString(value: string): void {
    this._words$$.next(value);
  }

}
