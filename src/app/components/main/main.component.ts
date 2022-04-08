import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig, ISortFieldValue } from 'src/app/model/filtering-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  @Input() sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    derection: false,
    increase: false
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
