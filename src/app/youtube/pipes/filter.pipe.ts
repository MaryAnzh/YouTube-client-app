import { Pipe, PipeTransform } from '@angular/core';
import { ISearchVideoItem } from '../../youtube/model/search-item.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: ISearchVideoItem[], word: string): ISearchVideoItem[] {

    const filterItems = items.filter(item => item.snippet.title.indexOf(word) > -1);

    items = filterItems;

    return items;

  }
}
