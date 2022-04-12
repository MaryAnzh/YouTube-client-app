import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})

export class AuthModule { }
