import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  @Input() public videoCard: IVideoItem | undefined;

  public color = '';

  constructor() {
    if (this.videoCard) {
      this.color = this.videoCard.snippet.publishedAt;
      
    }
  }
}
