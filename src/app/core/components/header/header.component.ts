import { Component, OnInit, OnDestroy } from '@angular/core';;
import { DataService } from '../../HttpClient/data/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { BehaviorSubject, debounceTime, filter, Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnDestroy {
  //задание на применение debounceTime
  private _searchString$$ = new BehaviorSubject<string>('');

  public searchString$ = this._searchString$$.asObservable()
    .pipe(
      debounceTime(1000),
      filter((value) => value.length > 2),
    );

  public isAuth$: Observable<boolean>;

  public userName$: Observable<string>;

  public isSettingOpen = false;

  constructor(
    private dataService: DataService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {
    this.isAuth$ = this.authService.isLoggedIn$.pipe(map((value: boolean) => value));
    this.userName$ = this.authService.user$.pipe(map((value: IResAuthLogin | null) => value?.login ?? ''));

    this.searchString$.subscribe(
      (value: string) => this.dataService.updateSearchString(value)
    )
  }

  ngOnDestroy(): void {
    this._searchString$$.unsubscribe();
  }

  searchWordsInput(value: string): void {
    if (this.isAuth$) {
      this._searchString$$.next(value);
    }
  }

    settingsOpenedOnClick(): void {
      this.isSettingOpen = !this.isSettingOpen;
      if(this.isAuth$) {

      this.settingsService.isSettingsOpen$$.next(this.isSettingOpen);
    } else {
      alert('необходима регистрация');
    }
  }

  logOutOnClick(): void {
    this.authService.logOut();
  }
}
