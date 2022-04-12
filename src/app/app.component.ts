import { Component } from '@angular/core';
import { IWordsSerch } from 'src/app/shared/directives/filtering-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'YouTube-client-app';

  headerWords: IWordsSerch = {
    searchStart: false,
    wordsValue: ''
  };

  headerWordsChange(words: IWordsSerch) {
    this.headerWords = words;
  }

  isSettingsOpened: boolean = false;

  isSettingsOpenedChange(isSettingsOpened: boolean) {
    this.isSettingsOpened = isSettingsOpened;
  }

}
