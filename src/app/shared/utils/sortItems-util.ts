import { IVideoItem } from 'src/app/youtube/model/video-item.model';

export function sortItems(items: IVideoItem[], field: string): void {

  switch (field) {
    case 'date': items.sort((a, b) => +a.snippet.publishedAt - +b.snippet.publishedAt)
      break;

    case 'views': console.log('сортировка по статистике')
      //items.sort((a, b) => a - b);
      break;

    default:
      break;
  }

}

