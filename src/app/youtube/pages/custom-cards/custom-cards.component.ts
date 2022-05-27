import { Component, Input, OnInit } from '@angular/core';
import { ICustomCard } from '../../model/custom-card.model';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss']
})

export class CustomCardsComponent implements OnInit {
  @Input() public customCards: ICustomCard[] | null = [
    {
      title: 'тестирование',
      description: 'карточка для тестирования',
      imageLink: 'https://i.ytimg.com/vi/SMKOxks4iDQ/mqdefault.jpg',
      videoLink: 'https://www.youtube.com/embed/SMKOxks4iDQ',
      date: new Date(),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
