import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { SettingsService } from 'src/app/core/services/settings/settings.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})

export class FilteringCriteriaBlockComponent {

  public sortIncreasing: boolean = false;

  public words: string = '';

  public open: boolean;

  constructor(
    private filterService: FilterService,
    private sortService: SortService,
    private settingsService: SettingsService) {
    this.open = this.settingsService.isSettingsOpen;
    this.settingsService.isSettingsOpenChange.subscribe(
      (value: boolean) => this.open = value
    );
   }

  userInputWordOnInput(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;
    this.filterService.words = elem.value;
  }

  sortItemsOnClick(e: Event) {
    const elem = <HTMLParagraphElement>e.target;
    const elemType: string | undefined = (elem.dataset['field']);

    if (elemType) {
      this.sortService.sortAddFilterConfig = {
        field: elemType,
        increase: this.sortIncreasing,
        isSortOn: true,
      }

      this.sortIncreasing = !this.sortIncreasing;
    }
  }
}
