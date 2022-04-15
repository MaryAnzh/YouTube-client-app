import { Injectable } from '@angular/core';
import { Item } from '../../model/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class VideoItemService {

  constructor() { }

  getVideo(items: Item[], id: string) {

    return items.filter(item => item.id === id)[0]
  }

  getItemSmallDescription(description: string): string {
    const firstStringChung: number = 0;

    return description.split('\n')[firstStringChung];
  }

  getitemDateLocal(dateStr: string): string {

    return new Date(Date.parse(dateStr)).toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  }
}
