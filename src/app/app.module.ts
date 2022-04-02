import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputWithSubmitButtonComponent } from './components/header/search-input-with-submit-button/search-input-with-submit-button.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { FilteringCriteriaBlockComponent } from './components/main/filtering-criteria-block/filtering-criteria-block.component';
import { InputSearchByWordOrSentenceComponent } from './components/main/filtering-criteria-block/input-search-by-word-or-sentence/input-search-by-word-or-sentence.component';
import { SearchResultsBlockComponent } from './components/main/search-results-block/search-results-block.component';
import { VideoCardComponent } from './components/main/search-results-block/video-card/video-card.component';
import { MainComponent } from './components/main/main.component';
import { SearchByDateComponent } from './components/main/filtering-criteria-block/search-by-date/search-by-date.component';
import { SearchByViewsCountComponent } from './components/main/filtering-criteria-block/search-by-views-count/search-by-views-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchInputWithSubmitButtonComponent,
    SettingsButtonComponent,
    LoginInformationBlockComponent,
    FilteringCriteriaBlockComponent,
    InputSearchByWordOrSentenceComponent,
    SearchResultsBlockComponent,
    VideoCardComponent,
    MainComponent,
    SearchByDateComponent,
    SearchByViewsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
