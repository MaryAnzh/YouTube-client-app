import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../../youtube/model/search-item.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: IVideoItem[], word: string): IVideoItem[] {

    const filterItems = items.filter(item => item.snippet.title.indexOf(word) > -1);

    items = filterItems;

    return items;

  }
}
