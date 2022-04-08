import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './model/search-item.model';
import { items } from './services/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'YouTube-client-app';

  @Input() words: string = '';

  wordsChange(words: string) {
    this.words = words;
  }

  @Input() isSettingsOpened: boolean = false;

  isSettingsOpenedChange(isSettingsOpened: boolean) {
  this.isSettingsOpened = isSettingsOpened;
}

}
