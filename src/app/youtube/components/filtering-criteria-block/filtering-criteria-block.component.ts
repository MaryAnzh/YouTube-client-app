import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
  providers: [FilterService],
})

export class FilteringCriteriaBlockComponent {
  public sortAddFilterConfig: ISortAddFilterConfig = {
    field: '',
    isSortOn: true,
    increase: true
  };

  public sortIncreasingDate: boolean = true;

  public sortIncreasingViews: boolean = true;

  public words: string = '';

  userInputWordOnInput(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;
  }

  sortItemsOnClick(e: Event) {
    const elem = <HTMLParagraphElement>e.target;
    const elemType = elem.dataset['field'];
    console.log(elemType);
  }
}
