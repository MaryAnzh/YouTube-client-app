import { Item } from 'src/app/youtube/model/search-item.model';
import { SortFieldValue } from './sortFieldValue-util'

export function sortItems(items: Item[], field: string) {

  switch (field) {
    case 'date': items.sort((a, b) =>
      SortFieldValue.DATE(a.snippet.publishedAt) - SortFieldValue.DATE(b.snippet.publishedAt)
    );
      break;

    case 'likes': items.sort((a, b) =>
      SortFieldValue.LIKes(a.statistics.likeCount) - SortFieldValue.LIKes(b.statistics.likeCount)

    );
      break;

    default:
      break;
  }

}

