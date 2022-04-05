import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})

export class FilteringCriteriaBlockComponent {
  public sortOn: boolean = false;

  public sortProps: string = '';

  public sortIncreasing: boolean = true;

  public words: string = '';

  @Output() sortOnChange = new EventEmitter<boolean>();
  @Output() sortPropsChange = new EventEmitter<string>();
  @Output() sortIncreasingChange = new EventEmitter<boolean>();
  @Output() wordsChange = new EventEmitter<string>();

}
