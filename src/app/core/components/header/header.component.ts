import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { SubscriptionLike } from 'rxjs';
import { SearchService } from 'src/app/youtube/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public subscriptionisauth: SubscriptionLike;

  public subscriptionUserName: SubscriptionLike;

  public subscriptionisSettingOpen: SubscriptionLike;

  public isAuth: boolean;

  public wordsValue: string = '';

  public userName: string | null;

  public isSettingOpen: boolean;

  constructor(private dataService: DataService,
    private settingsService: SettingsService,
    private authService: AuthService,
    private searchService: SearchService
  ) {

    this.isAuth = false;
    this.subscriptionisauth = this.authService.isLoggedIn$.subscribe(
      (value: boolean) => this.isAuth = value
    )

    this.userName = '';
    this.subscriptionUserName = this.authService.user$.subscribe(
      (value: IResAuthLogin | null) => this.userName = value?.login ?? null
    )

    this.isSettingOpen = false;
    this.subscriptionisSettingOpen = this.settingsService.isSettingsOpen$.subscribe(
      (value: boolean) => {
        this.isSettingOpen = value;
      }
    )
  }

  async submitButtonOnClick(value: string): Promise<void> {
    if (this.isAuth) {
      await this.dataService.getYouTubeSearchResults(value);
    } else {
      alert('необходима регистрация');
    }
  }

  settingsOpenedOnClick(): void {
    if (this.isAuth) {
      this.isSettingOpen = !this.isSettingOpen;
      if (this.isSettingOpen) {
        this.settingsService.open();
      } else {
        this.settingsService.close();
      }
    } else {
      alert('необходима регистрация');
    }
  }

  logOutOnClick() {
    this.authService.logOut();
    this.dataService.removeItem();
  }

  ngOnDestroy() {
    if (this.subscriptionisauth) {
      this.subscriptionisauth.unsubscribe();
    }

    if (this.subscriptionUserName) {
      this.subscriptionUserName.unsubscribe();
    }

    if (this.subscriptionisSettingOpen) {
      this.subscriptionisSettingOpen.unsubscribe();
    }
  }
}
