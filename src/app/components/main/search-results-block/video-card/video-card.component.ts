import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  public videoCard: Item = items[0];
  //public videoCard: Item | undefined;
  // в таком виде выскакивает ошибка

  @Input()
  public set item(item: Item) {
    this.videoCard = item;
  }

}
