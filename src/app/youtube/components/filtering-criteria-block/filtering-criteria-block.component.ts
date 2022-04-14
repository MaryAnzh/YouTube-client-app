import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})

export class FilteringCriteriaBlockComponent {

  public sortIncreasing: boolean = true;

  public words: string = '';

  constructor(private filterService: FilterService) {
   }

  userInputWordOnInput(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;
  }

  sortItemsOnClick(e: Event) {
    const elem = <HTMLParagraphElement>e.target;
    const elemType: string | undefined = (elem.dataset['field']);

    if (elemType) {
      this.filterService.sortAddFilterConfig = {
        field: elemType,
        increase: this.sortIncreasing,
        isSortOn: true,
      }

      this.sortIncreasing = !this.sortIncreasing;
    }
  }
}
