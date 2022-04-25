import { Component, } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidators } from 'src/app/shared/utils/CustomValidators';

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
      Validators.minLength(8),
      customValidators.passwordValidator(),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  submit() {
    const { userName, pass } = this.loginForm.value;
    if (this.loginForm.valid) {
      this.authService.logIn(userName);
      this.router.navigateByUrl('/');
    }
  }

}
