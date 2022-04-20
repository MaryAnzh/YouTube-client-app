import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { VideoItemService } from 'src/app/youtube/services/video-item/video-item.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  @Input() public videoCard: IVideoItem | undefined;

  public color = '';

  constructor(private videoItemService: VideoItemService) {
    if (this.videoCard) {
      this.color = this.videoCard.snippet.publishedAt;
    }
  }

  truncateTitle(title: string): string {
    if (title.length > 60) {
      const a = this.videoItemService.truncateTitle(title).split(' ');
      a.slice(a.length - 1);
      return a.join(' ') + ' . . .';
    }
    return title;
  }
}
