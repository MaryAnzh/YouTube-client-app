import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { GuardsService } from '../../guards/guards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isAuth: boolean;

  wordsValue: string = '';

  constructor(private dataService: DataService,
    private settingsService: SettingsService,
    private guardsService: GuardsService) {
    this.isAuth = this.guardsService.isAuth;
    this.guardsService.isAuthChange.subscribe(
      (value: boolean) => this.isAuth = value
    );
     }

  submitButtonOnClick(value: string): void {
    if (this.isAuth) {
      this.dataService.wordsSerch = value;
    }
  }

  settingsOpenedOnClick(): void {
    if (this.isAuth) {
      this.settingsService.isSettingsOpen = !this.settingsService.isSettingsOpen;
    }
  }
}
