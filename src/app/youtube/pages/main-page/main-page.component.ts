import { Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  public isSettingOpen: Observable<boolean>;

  public isAuth: Observable<boolean>;

  constructor(private settingsService: SettingsService,
    private authService: AuthService) {
    this.isSettingOpen = this.settingsService.isSettingsOpen$$;
    this.isAuth = this.authService.isLoggedIn$;
  }
}
