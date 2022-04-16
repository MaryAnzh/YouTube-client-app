import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { IResAuthLogin } from 'src/app/auth/model/user-storage-data.model';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public subscriptionisauth: SubscriptionLike;

  public subscriptionUserName: SubscriptionLike;

  public isAuth: boolean;

  public wordsValue: string = '';

  public userName: string | null;

  constructor(private dataService: DataService,
    private settingsService: SettingsService,
    private authService: AuthService) {

    this.isAuth = false;
    this.subscriptionisauth = this.authService.isLoggedIn$.subscribe(
      (value: boolean) => this.isAuth = value
    )

    this.userName = '';
    this.subscriptionUserName = this.authService.user$.subscribe(
      (value: IResAuthLogin | null) => this.userName = value?.login ?? null
    )
  }

  submitButtonOnClick(value: string): void {
    if (this.isAuth) {
      this.dataService.IWordsSearch = value;
    } else {
      alert('необходима регистрация');
    }
  }

  settingsOpenedOnClick(): void {
    if (this.isAuth) {
      this.settingsService.isSettingsOpen = !this.settingsService.isSettingsOpen;
    } else {
      alert('необходима регистрация');
    }
  }

  logOutOnClick() {
    this.authService.logOut();
    this.dataService.items = [];
  }

  ngOnDestroy() {
    if (this.subscriptionisauth) {
      this.subscriptionisauth.unsubscribe();
    }

    if(this.subscriptionUserName) {
      this.subscriptionUserName.unsubscribe();
    }
  }
}
