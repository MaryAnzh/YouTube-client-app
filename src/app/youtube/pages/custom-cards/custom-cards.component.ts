import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomCard } from '../../model/custom-card.model';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'src/app/ngrx/selector/youtube.selectors';
import { IState } from 'src/app/ngrx/state/youtube.state';

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

  @Input() public customCards$: Observable<ICustomCard[]> = this.store.select(selectCustomCards);

  constructor(
    private store: Store<IState>
    ) {

  }

  ngOnInit(): void {
  }

}
