import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  wordsValue: string = '';

  constructor(private dataService: DataService,
    private settingsService: SettingsService) {  }

  submitButtonOnClick(value: string): void {
    this.dataService.wordsSerch = value;
  }

  settingsOpenedOnClick(): void {
    this.settingsService.isSettingsOpen = !this.settingsService.isSettingsOpen;
  }
}
