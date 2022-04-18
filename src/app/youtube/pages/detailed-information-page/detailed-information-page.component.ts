import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideoItemService } from '../../services/video-item/video-item.service';
import { IVideoItem } from '../../model/video-item.model';
import { DataService } from 'src/app/core/services/date/data.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})

export class DetailedInformationPageComponent {
  public item: IVideoItem | undefined;

  public smallDescription: string = '';

  public itemDateLocal: string = '';

  constructor(
    private videoItemService: VideoItemService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item = this.videoItemService.getVideo(this.dataService.items, id);
      if (this.item) {
        this.smallDescription = this.videoItemService.getItemSmallDescription(this.item.snippet.description);
        this.itemDateLocal = this.videoItemService.getitemDateLocal(this.item.snippet.publishedAt);
        console.log(this.item);
      }
    }
  }

}
