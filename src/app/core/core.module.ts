import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from '../youtube/pages/main-page/main-page.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule {

}
