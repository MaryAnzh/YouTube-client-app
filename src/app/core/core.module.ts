import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailedInformationPageComponent } from '../youtube/pages/detailed-information-page/detailed-information-page.component';
import { ArrowComponent } from '../youtube/components/arrow/arrow.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    DetailedInformationPageComponent,
    ArrowComponent
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
