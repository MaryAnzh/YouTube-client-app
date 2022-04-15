import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Item } from 'src/app/youtube/model/search-item.model';
import { items } from 'src/app/data/items';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  public color: string = '';

  public videoCard: Item | undefined;

  public itemId: string = '';

  @Input()
  public set item(item: Item) {
    this.videoCard = item;
    this.color = item.snippet.publishedAt;
  }
}
