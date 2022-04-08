import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWordsSerch } from 'src/app/model/filtering-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'YouTube-client-app';

  @Input() headerWords: IWordsSerch = {
    serchStart: false,
    wordsValue: ''
  };

  headerWordsChange(words: IWordsSerch) {
    this.headerWords = words;
  }

  @Input() isSettingsOpened: boolean = false;

  isSettingsOpenedChange(isSettingsOpened: boolean) {
  this.isSettingsOpened = isSettingsOpened;
}

}
