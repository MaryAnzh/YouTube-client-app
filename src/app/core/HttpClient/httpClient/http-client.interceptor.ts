import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  private _APIkey = 'AIzaSyAPL2IqZBsGRYbZwj-jGWNZIhekt29YdUk';

  private _baseURL = 'https://www.googleapis.com/youtube/v3/';

  private _token = '';

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clientRequest = request.clone({
      setHeaders: { 'Authorization': this._token },
      url: `${this._baseURL}${request.url}`,
      setParams: { 'key': this._APIkey },
    });

    return next.handle(clientRequest);
  }
}
