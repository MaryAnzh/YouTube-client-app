import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  @Input() sortOn: boolean = false;

  @Input() sortProps: string = '';

  @Input() sortIncreasing: boolean = true;

  @Input() words: string = '';

  sortOnChange(events: boolean) {
    this.sortOn = events;
  }

  sortPropsChange(events: string) {
    this.sortProps = events;
  }

  sortIncreasingChange(events: boolean) {
    this.sortIncreasing = events;
  }

  wordsChange(events: string) {
    this.words = events;
  }

 }
