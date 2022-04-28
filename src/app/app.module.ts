import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInterceptor } from './core/interceptors/http-client.interceptor';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/services/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),

  ],

  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true,
    },
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
