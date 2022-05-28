import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data/data.service';
import { ICustomCard } from '../../model/custom-card.model';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss']
})

export class CustomCardsComponent implements OnInit {
  public test: ICustomCard[] = [
    {
      title: 'тестирование',
      description: 'карточка для тестирования',
      imageLink: 'https://i.ytimg.com/vi/SMKOxks4iDQ/mqdefault.jpg',
      videoLink: 'https://www.youtu.be.com/SMKOxks4iDQ',
      date: new Date(),
    }
  ];

  @Input() customCards: ICustomCard[] | null;

  constructor(
    private dataService: DataService) {
    this.customCards = this.dataService.cards;
    console.log('constructor');
    console.log(this.dataService.cards);
  }

  ngOnInit(): void {
  }

}
