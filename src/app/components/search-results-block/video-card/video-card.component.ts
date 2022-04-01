import { Component, OnInit } from '@angular/core';
import { videoSearchResults } from 'src/app/services/videoSearchResults';
import { ISearchResults } from 'src/app/model/search-response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {
  videoSearchResults: ISearchResults = videoSearchResults;

}
