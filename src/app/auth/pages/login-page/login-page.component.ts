import { Component,  } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  constructor(
    private authService: AuthService
  ) { }

  submitUserDataOnClick(name: string): void {
    this.authService.logIn(name);
  }

}
