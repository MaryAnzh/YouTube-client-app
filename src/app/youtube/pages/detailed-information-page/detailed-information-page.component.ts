import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';import { VideoItemService } from '../../services/video-item/video-item.service';
import { IVideoItem } from '../../model/video-item.model';
import { DataService } from 'src/app/core/HttpClient/data/data.service';
import { Observable, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})

export class DetailedInformationPageComponent {
  public item$: Observable<IVideoItem> | null = null;

  public item: IVideoItem | null = null;

  public itemDateLocal: string = '';

  constructor(
    private videoItemService: VideoItemService,
    private route: ActivatedRoute,
    private dataService: DataService) {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item$ = this.dataService.getItemById(id);
      this.item$.subscribe(
        (value: IVideoItem) => {
          this.item = value;
          this.itemDateLocal = this.videoItemService.getitemDateLocal(value.snippet.publishedAt)
        }
      );
    }
  }
}
