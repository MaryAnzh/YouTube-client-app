import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent
  },
  {
    path: 'detaile',
    component: DetailedInformationPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
