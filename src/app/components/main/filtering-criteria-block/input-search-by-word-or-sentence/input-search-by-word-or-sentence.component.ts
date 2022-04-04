import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search-by-word-or-sentence',
  templateUrl: './input-search-by-word-or-sentence.component.html',
  styleUrls: ['./input-search-by-word-or-sentence.component.scss']
})

export class InputSearchByWordOrSentenceComponent {

  userWord: string = '';

  #word: string = '';

  get word(): string {
    return this.#word;
  }

  @Input() set word(value: string) {
    this.#word = value;
    this.wordChange.emit(this.word);
  }

  @Output() wordChange = new EventEmitter<string>()

  clickme(value: string): void {
    this.userWord = value;
    this.word = value;
  }

}
