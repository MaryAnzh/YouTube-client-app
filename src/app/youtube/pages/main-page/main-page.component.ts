import { Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnDestroy {

  public subscriptionIsSettingOoen: SubscriptionLike;

  public open: boolean;

  constructor(private settingsService: SettingsService) {
    this.open = false;
    this.subscriptionIsSettingOoen = this.settingsService.isSettingsOpen$.subscribe(
      (value: boolean) => this.open = value
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptionIsSettingOoen) {
      this.subscriptionIsSettingOoen.unsubscribe();
    }
  }
}
