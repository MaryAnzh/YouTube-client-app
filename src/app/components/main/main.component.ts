import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  #isSettingsBlockOpened: boolean = false;

  #items: Item[] = [];

  @Input() words: string = '';


  // @Input()  words(value: string) {
  //   this.#words = value;
  //   this.wordsChange.emit(this.words);
  // }

  // @Output() wordsChange = new EventEmitter<string>();

  get isSettingsBlockOpened(): boolean {
    return this.#isSettingsBlockOpened;
  }

  @Input() set isSettingsBlockOpened(value: boolean) {
    this.#isSettingsBlockOpened = value;
    this.isSettingsBlockOpenedChange.emit(this.isSettingsBlockOpened);
  }

  @Output() isSettingsBlockOpenedChange = new EventEmitter<boolean>();

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

 }
