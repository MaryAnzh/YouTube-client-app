import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { SearchInputWithSubmitButtonComponent } from './core/components/header/search-input-with-submit-button/search-input-with-submit-button.component';
import { SettingsButtonComponent } from './core/components/header/settings-button/settings-button.component';
import { LoginInformationBlockComponent } from './core/components/header/login-information-block/login-information-block.component';
import { FilteringCriteriaBlockComponent } from './youtube/components/main/filtering-criteria-block/filtering-criteria-block.component';
import { InputSearchByWordOrSentenceComponent } from './youtube/components/main/filtering-criteria-block/input-search-by-word-or-sentence/input-search-by-word-or-sentence.component';
import { SearchResultsBlockComponent } from './youtube/components/main/search-results-block/search-results-block.component';
import { VideoCardComponent } from './youtube/components/main/search-results-block/video-card/video-card.component';
import { MainComponent } from './youtube/components/main/main.component';
import { SearchByDateComponent } from './youtube/components/main/filtering-criteria-block/search-by-date/search-by-date.component';
import { SearchByViewsCountComponent } from './youtube/components/main/filtering-criteria-block/search-by-views-count/search-by-views-count.component';

import { DateColorDirective } from './shared/directives/dateColor.directive';

import { SortPipe } from './shared/pipes/sort.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';

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
    SearchByViewsCountComponent,

    DateColorDirective,

    SortPipe,
    FilterPipe,
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
