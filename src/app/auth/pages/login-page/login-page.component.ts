import { Component,  } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  constructor(private loginService: LoginService) { }

  submitUserDataOnClick(name: string) {
    this.loginService.login(name);
  }

}
