import { Component, Input, OnInit } from '@angular/core';
import { ICustomCard } from '../../model/custom-card.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() public customCard: ICustomCard | null = null;

  public color = '';

  constructor() { }

  ngOnInit(): void {
    if (this.customCard) {
      this.color = this.customCard.date.toString();
    }
  }

}
