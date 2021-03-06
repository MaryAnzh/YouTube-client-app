import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { AuthGuard } from './core/guards/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'youtube',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
