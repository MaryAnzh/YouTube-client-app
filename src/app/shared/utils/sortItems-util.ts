import { IVideoItem } from 'src/app/youtube/model/search-item.model';
import { SortFieldValue } from './sortFieldValue-util'

export function sortItems(items: IVideoItem[], field: string) {

  switch (field) {
    case 'date': items.sort((a, b) => +a.snippet.publishTime - +b.snippet.publishTime)
      break;

    case 'views': console.log('сортировка по статистике')
      //items.sort((a, b) => a - b);
      break;

    default:
      break;
  }

}

