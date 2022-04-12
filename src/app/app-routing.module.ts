import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
