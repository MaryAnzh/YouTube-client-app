import { Component, EventEmitter, Output, Input, SimpleChange } from '@angular/core';
import { VideoCardComponent } from '../../main/search-results-block/video-card/video-card.component';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss']
})

export class SearchInputWithSubmitButtonComponent {

  #words: string = '';

  get words(): string {
    return this.#words;
  }

  @Input() set words(value: string) {
    this.#words = value;
    this.wordsChange.emit(this.words);
  }

  @Output() wordsChange = new EventEmitter<string>();

  constructor() { }

  submitButtonOnClick(value: string): void {
    this.words = value;
    this.wordsChange.emit(this.words);
    console.log('Из импута');
    console.log(this.words);
  }

}
