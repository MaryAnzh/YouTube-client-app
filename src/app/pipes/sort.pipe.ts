import { Pipe, PipeTransform } from '@angular/core';
import { items } from '../services/items';
import { Item } from '../model/search-item.model';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  public sortPropDate: string = 'date';

  public sortPropLikes: string = 'likes';

  transform(items: Item[], on: boolean, increasing: boolean, sortProp: string): Item[] {
    if (on) {
      if (sortProp === this.sortPropDate) {
        items.sort((a, b) => {

          if (SortPipe.itemAgeCalculated(a.snippet.publishedAt) > SortPipe.itemAgeCalculated(b.snippet.publishedAt)) {

            return 1;
          } else if (SortPipe.itemAgeCalculated(a.snippet.publishedAt) < SortPipe.itemAgeCalculated(b.snippet.publishedAt)) {

            return -1;
          } else {

            return 0;
          }
        })
      } else if (sortProp === this.sortPropLikes) {
        items.sort((a, b) => {

          if (+a.statistics.likeCount > +b.statistics.likeCount) {

            return 1;
          } else if (+a.statistics.likeCount < +b.statistics.likeCount) {

            return -1;
          } else {

            return 0;
          }
        })
      }


      if (!increasing) {
        items.reverse();
      }
    }

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
