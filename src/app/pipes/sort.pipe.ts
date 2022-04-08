import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/search-item.model';
import { sortItems } from '../utils/sortItejs-util';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: Item[], derection: boolean, increase: boolean, field: string): Item[] {

    if (derection) {
      sortItems(items, field);
    }

    return increase ? items : items.reverse();

  }

}
