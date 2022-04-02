import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Item } from 'src/app/model/search-item.model';
import { items } from 'src/app/services/items';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss']

})

export class SearchInputWithSubmitButtonComponent {

  @Input() items: Item[] = [];

  @Output() itemsChange = new EventEmitter<Item[]>();

  constructor() { }

  submitButtonOnClick() {
    this.items = items;
    this.itemsChange.emit(this.items);
  }
}
