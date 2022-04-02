import { Component, EventEmitter, Output, Input } from '@angular/core';
import { appModel } from 'src/app/model/appModel';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss']

})

export class SearchInputWithSubmitButtonComponent {
  @Input() isSearchStarted: boolean = false;
  @Output() isSearchStartedChange = new EventEmitter<boolean>();

  constructor() { }

  submitButtonOnClick() {
    this.isSearchStarted = true;
    this.isSearchStartedChange.emit(this.isSearchStarted);
  }
}
