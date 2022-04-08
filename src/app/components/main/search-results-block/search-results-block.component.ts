import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})

export class SearchResultsBlockComponent {

  @Input() sortOn: boolean = false;

  @Input() sortProps: string = '';

  @Input() sortIncreasing: boolean = true;

  @Input() words: string = '';

  @Input() isSettingsOpened: boolean = false;

 }
