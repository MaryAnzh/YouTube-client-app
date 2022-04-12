import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWordsSerch } from 'src/app/shared/directives/filtering-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() headerWordsChange = new EventEmitter<IWordsSerch>();

  isSettingsOpened: boolean = false;

  @Output() isSettingsOpenedChange = new EventEmitter<boolean>();

}
