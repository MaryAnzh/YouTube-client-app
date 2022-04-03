import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'likeCountSort'
})

export class LikeCountPipe implements PipeTransform {

  transform(items: Item[]): Item[] {

    items.sort((a, b) => {

      if (+a.statistics.likeCount > +b.statistics.likeCount) {

        return 1;
      } else if (+a.statistics.likeCount < +b.statistics.likeCount) {

        return -1;
      } else {

        return 0;
      }
    })

    return items;

  }
}
