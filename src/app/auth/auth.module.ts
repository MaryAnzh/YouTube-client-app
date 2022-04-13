import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})

export class AuthModule { }
