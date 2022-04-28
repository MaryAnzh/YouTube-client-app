import { Component, Input } from '@angular/core';;
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Input() isAuth$: Observable<boolean>;

  public userName$: Observable<string>;

  public isSettingOpen = false;

  constructor(
    private settingsService: SettingsService,
    private authService: AuthService
  ) {
    this.isAuth$ = this.authService.isLoggedIn$.pipe(map((value: boolean) => value));
    this.userName$ = this.authService.user$.pipe(map((value: IResAuthLogin | null) => value?.login ?? ''));
  }

  settingsOpenedOnClick(): void {
    this.isSettingOpen = !this.isSettingOpen;
    if (this.isAuth$) {

      this.settingsService.isSettingsOpen$$.next(this.isSettingOpen);
    } else {
      alert('необходима регистрация');
    }
  }

  logOutOnClick(): void {
    this.authService.logOut();
  }
}
