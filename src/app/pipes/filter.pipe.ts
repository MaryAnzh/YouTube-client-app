import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: Item[], word: string): Item[] {
    const filteredItems: Item[] = [];
    items.forEach(element => {
      if (element.snippet.title.indexOf(word) > -1) {
        filteredItems.push(element);
      }
    });

    items = filteredItems;

    return items;

  }
}
