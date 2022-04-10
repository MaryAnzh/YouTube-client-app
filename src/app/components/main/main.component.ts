import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/model/filtering-model';
import { IWordsSerch } from 'src/app/model/filtering-model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  @Input() sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: false,
    increase: false
  };

  @Input() headerWords: IWordsSerch = {
    searchStart: false,
    wordsValue: ''
  };

  sortAddFilterConfigChange(value: ISortAddFilterConfig) {
    this.sortAddFilterConfig = value;
  }

  @Input() words: string = '';

  wordsChange(events: string) {
    this.words = events;
  }

  @Input() isSettingsOpened: boolean = false;

}
