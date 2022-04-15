import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VideoItemService } from '../../services/video-item/video-item.service';
import { Item } from '../../model/search-item.model';
import { items } from 'src/app/data/items';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})

export class DetailedInformationPageComponent {

  public item: Item = items[1];

  public smallDescription: string = '';

  public itemDateLocal: string = '';

  constructor(private videoItemService: VideoItemService,
    private route: ActivatedRoute,
    private location: Location) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id && this.item) {
      this.item = this.videoItemService.getVideo(items, id);
      this.smallDescription = this.videoItemService.getItemSmallDescription(this.item.snippet.description);
      this.itemDateLocal = this.videoItemService.getitemDateLocal(this.item.snippet.publishedAt);
    }
  }

}
