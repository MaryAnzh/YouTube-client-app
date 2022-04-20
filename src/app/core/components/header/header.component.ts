import { Component, OnInit, OnDestroy } from '@angular/core';;
import { DataService } from '../../HttpClient/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { SubscriptionLike, BehaviorSubject, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnDestroy {
  private _userWords$$ = new BehaviorSubject<string>('');

  public userWords$ = this._userWords$$.asObservable().pipe(
    debounceTime(1000),
    filter((value) => value.length > 2),
  );

  public subscriptionIsAuth: SubscriptionLike;

  public subscriptionUserName: SubscriptionLike;

  public subscriptionUserWords: SubscriptionLike;

  public subscriptionisSettingOpen: SubscriptionLike;

  public isAuth = false;

  public userName: string | null = null;

  public isSettingOpen = false;

  public userWords = '';

  constructor(private dataService: DataService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {
    this.subscriptionIsAuth = this.authService.isLoggedIn$.subscribe(
      (value: boolean) => this.isAuth = value
    );

    this.subscriptionUserName = this.authService.user$.subscribe(
      (value: IResAuthLogin | null) => this.userName = value?.login ?? null
    );

    this.subscriptionisSettingOpen = this.settingsService.isSettingsOpen$.subscribe(
      (value: boolean) => {
        this.isSettingOpen = value;
      }
    );

    this.subscriptionUserWords = this.userWords$.subscribe(
      (value: string) => {
        this.userWords = value;
        this.dataService.getYouTubeSearchResults(this.userWords).then();
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscriptionIsAuth) {
      this.subscriptionIsAuth.unsubscribe();
    }

    if (this.subscriptionUserName) {
      this.subscriptionUserName.unsubscribe();
    }

    if (this.subscriptionisSettingOpen) {
      this.subscriptionisSettingOpen.unsubscribe();
    }
  }

  async searchWordsInput(value: string): Promise<void> {
    if (this.isAuth) {
      this._userWords$$.next(value);
    }
  }

  settingsOpenedOnClick(): void {
    this.isSettingOpen = !this.isSettingOpen;
    if (this.isAuth) {
      if (this.isSettingOpen) {
        this.settingsService.open();
      } else {
        this.settingsService.close();
      }

    } else {
      alert('необходима регистрация');
    }
  }

  logOutOnClick(): void {
    this.authService.logOut();
    this.dataService.removeItem();
  }
}
