import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  words: string = '';

  @Output() wordsChange = new EventEmitter<string>();

  isSettingsOpened: boolean = false;

  @Output() isSettingsOpenedChange = new EventEmitter<boolean>();

}

