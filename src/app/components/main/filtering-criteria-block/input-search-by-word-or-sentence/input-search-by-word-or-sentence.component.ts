import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search-by-word-or-sentence',
  templateUrl: './input-search-by-word-or-sentence.component.html',
  styleUrls: ['./input-search-by-word-or-sentence.component.scss']
})

export class InputSearchByWordOrSentenceComponent {

  words: string = '';

  @Output() wordsChange = new EventEmitter<string>();

  clickme(event: Event): void {
    const elem = <HTMLInputElement>event.target;
    this.words = elem.value;

    this.wordsChange.emit(this.words);

  }

}
