import { Component } from '@angular/core';
import { IWordsSerch } from 'src/app/shared/directives/filtering-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public wordsSerch: IWordsSerch = {
    wordsValue: '',
    searchStart: false
  }

  public isSettingsOpened: boolean = false;

  submitButtonOnClick(value: string): void {
    this.wordsSerch.searchStart = true;
    this.wordsSerch.wordsValue = value;
  }

  settingsOpenedOnClick(): void {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

}
