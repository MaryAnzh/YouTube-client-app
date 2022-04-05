import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  #sortOn: boolean = false;

  #sortIncreasing: boolean = true;

  #sortProps: string = 'date';

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

  #words: string = '';

  get words(): string {
    return this.#words;
  }

  @Input() set words(value: string) {
    this.#words = value;
    this.wordsChange.emit(this.words);
  }

  @Output() wordsChange = new EventEmitter<string>();

  currentItems: Item[] = items;


}
