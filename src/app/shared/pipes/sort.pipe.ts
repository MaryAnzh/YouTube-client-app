import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../../youtube/model/video-item.model';
import { sortItems } from '../utils/sortItems-util';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(items: IVideoItem[], isSortOn: boolean, increase: boolean, field: string): IVideoItem[] {

    if (isSortOn) {
      sortItems(items, field);
    }

    return increase ? items : items.reverse();

  }

}
