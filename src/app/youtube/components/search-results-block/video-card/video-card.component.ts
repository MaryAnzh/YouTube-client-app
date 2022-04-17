import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { IVideoItem } from 'src/app/youtube/model/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  public color: string = '';

  @Input() public videoCard: IVideoItem | undefined;
}
