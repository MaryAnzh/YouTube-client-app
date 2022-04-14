import { Item } from 'src/app/youtube/model/search-item.model';
import { SortFieldValue } from './sortFieldValue-util'

export function sortItems(items: Item[], field: string) {

  switch (field) {
    case 'date': items.sort((a, b) =>
      SortFieldValue.DATE(a.snippet.publishedAt) - SortFieldValue.DATE(b.snippet.publishedAt)
    );
      break;

    case 'views': items.sort((a, b) =>
      SortFieldValue.LIKes(a.statistics.viewCount) - SortFieldValue.LIKes(b.statistics.viewCount)

    );
      break;

    default:
      break;
  }

}

