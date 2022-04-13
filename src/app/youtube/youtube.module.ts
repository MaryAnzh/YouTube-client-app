import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    DetailedInformationPageComponent,
    ArrowComponent,
    VideoStatisticsComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    RouterModule,
  ]
})
export class YoutubeModule { }
