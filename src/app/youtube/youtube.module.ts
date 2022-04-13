import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsBlockComponent } from './components/search-results-block/search-results-block.component';
import { VideoCardComponent } from './components/search-results-block/video-card/video-card.component';

import { ArrowComponent } from './components/arrow/arrow.component';
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component';
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component';

import { DateColorDirective } from '../shared/directives/dateColor.directive';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    YoutubeComponent,
    DetailedInformationPageComponent,
    MainPageComponent,
    ArrowComponent,
    VideoStatisticsComponent,
    SearchResultsBlockComponent,
    VideoCardComponent,
    FilteringCriteriaBlockComponent,
    SearchResultsBlockComponent,
    VideoCardComponent,

    DateColorDirective,

    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    RouterModule,
  ]
})

export class YoutubeModule { }
