import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../services/items';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: Item[]): Item[] {

    return items;

  }
}
