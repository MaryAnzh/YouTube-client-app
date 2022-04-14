import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
  ]
})

export class AuthModule { }
