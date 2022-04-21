import { Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { SubscriptionLike, Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  public isSettingOpen: Observable<boolean>;

  constructor(private settingsService: SettingsService) {
    this.isSettingOpen = this.settingsService.isSettingsOpen$$;
  }
}
