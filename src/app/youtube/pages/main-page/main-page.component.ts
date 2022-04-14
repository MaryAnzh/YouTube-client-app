import { Component } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings/settings.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  public open: boolean;

  constructor(private settingsService: SettingsService) {
    this.open = this.settingsService.isSettingsOpen;
    this.settingsService.isSettingsOpenChange.subscribe(
      (value: boolean) => this.open = value
    );
  }
}
