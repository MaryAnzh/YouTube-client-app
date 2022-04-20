import { Injectable } from '@angular/core';
import { IVideoItem } from '../../model/video-item.model';

@Injectable({
  providedIn: 'root'
})

export class VideoItemService {

  constructor() { }

  getVideo(items: IVideoItem[], id: string): IVideoItem {

    return items.filter(item => item.id === id)[0]
  }

  getItemSmallDescription(description: string): string {
    const firstStringChung: number = 0;

    return description.split('\n')[firstStringChung];
  }

  getitemDateLocal(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  }

  truncateTitle(title: string): string {
    const str = title.substring(0, 60);
    return str;
  }

}
