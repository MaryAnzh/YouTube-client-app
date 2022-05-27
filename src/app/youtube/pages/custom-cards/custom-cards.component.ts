import { Component, Input, OnInit } from '@angular/core';
import { ICustomCard } from '../../model/custom-card.model';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss']
})
export class CustomCardsComponent implements OnInit {
  @Input() public customCards: ICustomCard[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
