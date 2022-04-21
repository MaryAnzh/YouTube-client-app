import { Component, } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl('', [
      Validators.required,
      Validators.email]),
    "pass": new FormControl('', [
      Validators.required,

    ]),
  });

constructor(
  private authService: AuthService
) { }

submitUserDataOnClick(name: string): void {
  this.authService.logIn(name);
}
  submit() {
    console.log(this.loginForm);
  }

}
