import { Injectable } from '@angular/core';
import { IVideoItem } from '../../model/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class VideoItemService {

  constructor() { }

  getVideo(items: IVideoItem[], id: string) {

    return items.filter(item => item.id.videoId === id)[0]
  }

  getItemSmallDescription(description: string): string {
    const firstStringChung: number = 0;

    return description.split('\n')[firstStringChung];
  }

  getitemDateLocal(dateStr: Date): string {

    return dateStr.toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  }
}
