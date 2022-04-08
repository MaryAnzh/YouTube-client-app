import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig, ISortFieldValue } from 'src/app/model/filtering-model';


@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss']
})

export class FilteringCriteriaBlockComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    derection: true,
    increase: false
  };

  @Output() sortAddFilterConfigChange = new EventEmitter<ISortAddFilterConfig>();

  public words: string = '';

  @Output() wordsChange = new EventEmitter<string>();
}
