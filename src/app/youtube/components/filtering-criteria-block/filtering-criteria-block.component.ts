import { Component, OnDestroy } from '@angular/core';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';;
import { SubscriptionLike } from 'rxjs';
import { ISortAddFilterConfig } from 'src/app/shared/directives/filtering-model';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})

export class FilteringCriteriaBlockComponent implements OnDestroy {

  public subscription: SubscriptionLike;

  public sortIncreasing: boolean = false;

  public words: string = '';

  public isAuth: boolean;

  constructor(
    private filterService: FilterService,
    private sortService: SortService,
    private authService: AuthService
  ) {

    this.isAuth = false;
    this.subscription = this.authService.isLoggedIn$.subscribe(
      (value: boolean) => this.isAuth = value
    )

  }

  userInputWordOnInput(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;
    this.filterService.userWords(elem.value);
  }

  sortItemsOnClick(e: Event): void {
    const elem = <HTMLParagraphElement>e.target;
    const elemType: string | undefined = (elem.dataset['field']);

    if (elemType) {
      this.sortIncreasing = !this.sortIncreasing;

      const sortAddFilterConfig: ISortAddFilterConfig = {
        field: elemType,
        increase: this.sortIncreasing,
        isSortOn: true,
      }

      this.sortService.changeSortAddFilterConfig(sortAddFilterConfig);

    }


  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
