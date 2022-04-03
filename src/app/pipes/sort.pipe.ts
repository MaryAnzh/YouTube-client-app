import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../services/items';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: Item[]): Item[] {

    items.sort((a, b) => {

      if (SortPipe.itemAgeCalculated(a.snippet.publishedAt) > SortPipe.itemAgeCalculated(b.snippet.publishedAt)) {

        return 1;
      } else if (SortPipe.itemAgeCalculated(a.snippet.publishedAt) < SortPipe.itemAgeCalculated(b.snippet.publishedAt)) {

        return -1;
      } else {

        return 0;
      }
    })

    return items;

  }

  static itemAgeCalculated(exitDate: string): number {

    const itemDate = Date.parse(exitDate);
    const date = new Date();
    const itemAgeInMilliseconds = +date - +itemDate;
    const millisecondsInDay = 86400000;
    const itemAgeInDay = itemAgeInMilliseconds / millisecondsInDay;

    return itemAgeInDay;
  }

}
