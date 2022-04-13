import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/data/items';
import { Item } from '../../model/search-item.model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})

export class DetailedInformationPageComponent {

  public item: Item = items[0];

  public itemDate: Date = new Date(Date.parse(this.item.snippet.publishedAt));

  public itemDateLocal: string = this.itemDate.toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

  public description: string = (this.item.snippet.description.split('\n'))[0];


}
