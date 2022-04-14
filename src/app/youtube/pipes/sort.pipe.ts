import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../youtube/model/search-item.model';
import { sortItems } from '../utils/sortItems-util';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: Item[], isSortOn: boolean, increase: boolean, field: string): Item[] {

    if (isSortOn) {
      sortItems(items, field);
    }

    return increase ? items : items.reverse();

  }

}