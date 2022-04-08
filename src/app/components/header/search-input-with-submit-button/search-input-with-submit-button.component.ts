import { Component, EventEmitter, Output, Input, SimpleChange } from '@angular/core';
import { IWordsSerch } from 'src/app/model/filtering-model';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss']
})

export class SearchInputWithSubmitButtonComponent {

  headerWords: IWordsSerch = {
    serchStart: false,
    wordsValue: ''
  };

  @Output() headerWordsChange = new EventEmitter<IWordsSerch>();

  constructor() { }

  submitButtonOnClick(value: string): void {
    this.headerWords.serchStart = true;
    this.headerWords.wordsValue = '';
    this.headerWordsChange.emit(this.headerWords);
  }

}
