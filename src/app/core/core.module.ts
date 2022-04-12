import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    DetailedInformationPageComponent
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
