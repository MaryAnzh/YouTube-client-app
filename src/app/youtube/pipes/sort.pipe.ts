import { Pipe, PipeTransform } from '@angular/core';
import { ISearchVideoItem } from '../../youtube/model/search-item.model';
import { sortItems } from 'src/app/shared/utils/sortItems-util';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: ISearchVideoItem[], isSortOn: boolean, increase: boolean, field: string): ISearchVideoItem[] {

    if (isSortOn) {
      sortItems(items, field);
    }

    return increase ? items : items.reverse();

  }

}
