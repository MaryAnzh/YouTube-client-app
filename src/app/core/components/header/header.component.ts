import { Component } from '@angular/core';;
import { DataService } from '../../services/date/data.service';
import { SettingsService } from '../../services/settings/settings.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { LoginService } from 'src/app/auth/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isAuth: boolean;

  isAlert: boolean = false;

  wordsValue: string = '';

  userName: string;

  constructor(private dataService: DataService,
    private settingsService: SettingsService,
    private authService: AuthService,
    private loginService: LoginService) {

    this.isAuth = this.authService.isAuth;
    this.authService.isAuthChange.subscribe(
      (value: boolean) => this.isAuth = value
    );

    this.userName = this.loginService.userName;
    this.loginService.userNameChange.subscribe(
      (value: string) => this.userName = value
    );

  }

  submitButtonOnClick(value: string): void {
    if (this.isAuth) {
      this.dataService.wordsSerch = value;
    } else {
      this.isAlert = true;

    }
  }

  settingsOpenedOnClick(): void {
    if (this.isAuth) {
      this.settingsService.isSettingsOpen = !this.settingsService.isSettingsOpen;
    } else {
      this.isAlert = true;
    }
  }

  loginOnClick() {
    this.isAlert = false;
  }

  logOutOnClick() {
    this.loginService.logOut();
    this.dataService.items = [];

  }
}
