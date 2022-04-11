import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../youtube/model/search-item.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: Item[], word: string): Item[] {

    const filterItems = items.filter(item => item.snippet.title.indexOf(word) > -1);

    items = filterItems;

    return items;

  }
}
