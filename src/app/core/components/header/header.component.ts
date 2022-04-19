import { Component, OnInit } from '@angular/core';;
import { DataService } from '../../HttpClient/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { SubscriptionLike, BehaviorSubject, debounceTime, filter } from 'rxjs';
import { SearchService } from 'src/app/youtube/services/search/search.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
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
    private authService: AuthService,
    private searchService: SearchService
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

  ngOnInit(): void {


  }

  ngOnDestroy() {
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

  async searchWordsInput(value: string) {
    if (this.isAuth) {

      this._userWords$$.next(value);
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
}
