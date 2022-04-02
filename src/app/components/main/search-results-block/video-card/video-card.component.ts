import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/services/items';
import { Item } from 'src/app/model/search-item.model';
import { appModel } from 'src/app/model/appModel';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent {

  public items: Item[] = items;

  public isSearchResultsBlockVisible: boolean = appModel.isSearchResultsBlockVisible;

  // public get isSearchResultsBlockVisible(): boolean {
  //   return appModel.isSearchResultsBlockVisible;
  // }

  // public set isSearchResultsBlockVisible(value: boolean) {
  //   appModel.isSearchResultsBlockVisible = value;
  // }

}
