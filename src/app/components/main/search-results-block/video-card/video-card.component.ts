import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/services/items';
import { Item } from 'src/app/model/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  public items: Item[] = items;

  public get isSearchResultsBlockVisible(): boolean {
    return false;
  }

  public set isSearchResultsBlockVisible(value: boolean) {
    this.isSearchResultsBlockVisible = value;
  }

}
