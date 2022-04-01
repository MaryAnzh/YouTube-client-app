import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-results-block/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results-block/search-results/search-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputWithSubmitButtonComponent } from './components/header/search-input-with-submit-button/search-input-with-submit-button.component';
import { SettingsButtonComponent } from './components/header/settings-button/settings-button.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component';
import { ButtonsSortCriterionComponent } from './components/filtering-criteria-block/buttons-sort-criterion/buttons-sort-criterion.component';
import { InputSearchByWordOrSentenceComponent } from './components/filtering-criteria-block/input-search-by-word-or-sentence/input-search-by-word-or-sentence.component';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { VideoCardComponent } from './components/search-results-block/video-card/video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    LogoComponent,
    SearchInputWithSubmitButtonComponent,
    SettingsButtonComponent,
    LoginInformationBlockComponent,
    FilteringCriteriaBlockComponent,
    ButtonsSortCriterionComponent,
    InputSearchByWordOrSentenceComponent,
    SearchResultsBlockComponent,
    VideoCardComponent
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
