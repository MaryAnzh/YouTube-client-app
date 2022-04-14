import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  wordsValue: string = '';

  constructor(private dataService: DataService) { }

  public isSettingsOpened: boolean = false;

  submitButtonOnClick(value: string): void {
    this.dataService.wordsSerch = value;
  }

  settingsOpenedOnClick(): void {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

}
