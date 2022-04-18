import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { IVideoItem } from 'src/app/youtube/model/video-item.model';
import { VideoItemService } from 'src/app/youtube/services/video-item/video-item.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  public color: string = '';

  @Input() public videoCard: IVideoItem | undefined;

  constructor(private videoItemService: VideoItemService) {

  }

  truncateTitle(title: string): string {
    const a = this.videoItemService.truncateTitle(title).split(' ');
    a.slice(a.length - 1);
    return a.join(' ') + ' . . .';
  }
}
