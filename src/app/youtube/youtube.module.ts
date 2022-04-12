import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { ArrowComponent } from './components/arrow/arrow.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    ArrowComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    RouterModule,
  ]
})
export class YoutubeModule { }
