import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search-by-word-or-sentence',
  templateUrl: './input-search-by-word-or-sentence.component.html',
  styleUrls: ['./input-search-by-word-or-sentence.component.scss']
})

export class InputSearchByWordOrSentenceComponent {

  userWord: string = '';

  words: string = '';

  @Output() wordsChange = new EventEmitter<string>();

  clickme(value: string): void {
    this.userWord = value;
    this.words = value;

    this.wordsChange.emit(this.words);

  }

}
